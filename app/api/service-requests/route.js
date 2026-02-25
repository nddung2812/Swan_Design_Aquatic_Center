import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";
import {
  getImageValidationError,
  normalizeServiceRequestFields,
  validateEmail,
  validateRequiredFields,
} from "@/lib/serviceRequestValidation";

function toPgTextArray(values) {
  if (!values.length) {
    return "{}";
  }

  const escaped = values.map((value) =>
    `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`
  );

  return `{${escaped.join(",")}}`;
}

function buildBlobPath(fileName) {
  const safeName = String(fileName || "upload")
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 64);

  return `service-requests/${Date.now()}-${crypto.randomUUID()}-${safeName}`;
}

export async function POST(request) {
  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json(
        { error: "Server storage is not configured." },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const fields = normalizeServiceRequestFields({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      service: formData.get("service"),
      message: formData.get("message"),
    });

    const requiredError = validateRequiredFields(fields);
    if (requiredError) {
      return NextResponse.json(requiredError, { status: 400 });
    }

    const emailError = validateEmail(fields.email);
    if (emailError) {
      return NextResponse.json(emailError, { status: 400 });
    }

    const images = formData
      .getAll("images")
      .filter((file) => file instanceof File && file.size > 0);

    const imageValidationError = getImageValidationError(images);
    if (imageValidationError) {
      return NextResponse.json(
        { error: imageValidationError, field: "images" },
        { status: 400 }
      );
    }

    const uploadedImageUrls = [];
    for (const image of images) {
      const blob = await put(buildBlobPath(image.name), image, {
        access: "public",
      });
      uploadedImageUrls.push(blob.url);
    }

    const sql = getSql();
    const imageUrlsArrayLiteral = toPgTextArray(uploadedImageUrls);

    const rows = await sql`
      INSERT INTO service_requests (
        name,
        email,
        phone,
        location,
        service,
        message,
        image_urls
      )
      VALUES (
        ${fields.name},
        ${fields.email},
        ${fields.phone},
        ${fields.location},
        ${fields.service},
        ${fields.message || null},
        ${imageUrlsArrayLiteral}::text[]
      )
      RETURNING id, created_at, image_urls
    `;

    const created = rows[0];
    return NextResponse.json(
      {
        id: created.id,
        createdAt: new Date(created.created_at).toISOString(),
        imageUrls: created.image_urls || [],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create service request:", error);
    return NextResponse.json(
      { error: "Unable to submit your request. Please try again." },
      { status: 500 }
    );
  }
}
