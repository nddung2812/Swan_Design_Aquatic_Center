import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 100;

function parseLimit(value) {
  const parsed = Number.parseInt(value ?? "", 10);
  if (Number.isNaN(parsed) || parsed <= 0) {
    return DEFAULT_LIMIT;
  }
  return Math.min(parsed, MAX_LIMIT);
}

function encodeCursor(cursorData) {
  return Buffer.from(JSON.stringify(cursorData)).toString("base64url");
}

function decodeCursor(value) {
  try {
    const decoded = Buffer.from(value, "base64url").toString("utf8");
    const parsed = JSON.parse(decoded);
    if (
      !parsed ||
      typeof parsed.id !== "string" ||
      typeof parsed.createdAt !== "string"
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function formatRow(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    location: row.location,
    service: row.service,
    message: row.message,
    imageUrls: row.image_urls || [],
    createdAt: new Date(row.created_at).toISOString(),
  };
}

export async function GET(request) {
  try {
    const expectedToken = process.env.SERVICE_REQUESTS_ADMIN_TOKEN;
    if (!expectedToken) {
      return NextResponse.json(
        { error: "Admin API token is not configured." },
        { status: 500 }
      );
    }

    const authHeader = request.headers.get("authorization") || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice("Bearer ".length).trim()
      : "";

    if (!token || token !== expectedToken) {
      return unauthorized();
    }

    const url = new URL(request.url);
    const limit = parseLimit(url.searchParams.get("limit"));
    const cursorParam = url.searchParams.get("cursor");

    const sql = getSql();
    let rows;

    if (cursorParam) {
      const cursor = decodeCursor(cursorParam);
      if (!cursor) {
        return NextResponse.json(
          { error: "Invalid cursor format." },
          { status: 400 }
        );
      }

      rows = await sql`
        SELECT
          id,
          name,
          email,
          phone,
          location,
          service,
          message,
          image_urls,
          created_at
        FROM service_requests
        WHERE (created_at, id) < (${cursor.createdAt}::timestamptz, ${cursor.id}::uuid)
        ORDER BY created_at DESC, id DESC
        LIMIT ${limit + 1}
      `;
    } else {
      rows = await sql`
        SELECT
          id,
          name,
          email,
          phone,
          location,
          service,
          message,
          image_urls,
          created_at
        FROM service_requests
        ORDER BY created_at DESC, id DESC
        LIMIT ${limit + 1}
      `;
    }

    const hasMore = rows.length > limit;
    const currentPageRows = hasMore ? rows.slice(0, limit) : rows;
    const items = currentPageRows.map(formatRow);

    let nextCursor = null;
    if (hasMore && currentPageRows.length > 0) {
      const lastItem = currentPageRows[currentPageRows.length - 1];
      nextCursor = encodeCursor({
        createdAt: new Date(lastItem.created_at).toISOString(),
        id: lastItem.id,
      });
    }

    return NextResponse.json({ items, nextCursor });
  } catch (error) {
    console.error("Failed to query service requests:", error);
    return NextResponse.json(
      { error: "Unable to fetch service requests." },
      { status: 500 }
    );
  }
}
