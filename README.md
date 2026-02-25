# Swan Design Aquatic Center

Next.js app for aquatic services and ecommerce flows.

## Local development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

## Environment variables

Create a local env file (for example `.env.local`) with:

```bash
# Existing payment flow variables
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...

# Service request storage
DATABASE_URL=postgres://... # Neon connection string
BLOB_READ_WRITE_TOKEN=...   # Vercel Blob read/write token
SERVICE_REQUESTS_ADMIN_TOKEN=... # Bearer token for admin query endpoint
```

## Service request image upload feature

### Endpoints

- `POST /api/service-requests`
  - Accepts `multipart/form-data` with:
    - `name`, `email`, `phone`, `location`, `service`, `message`
    - `images` (0-2 image files, each <= 2MB)
  - Stores image URLs in Vercel Blob and request metadata in Neon.

- `GET /api/admin/service-requests`
  - Requires header: `Authorization: Bearer <SERVICE_REQUESTS_ADMIN_TOKEN>`
  - Supports query params:
    - `limit` (default 20, max 100)
    - `cursor` (opaque pagination cursor)

### Database migration

Apply:

`/Users/johnnynguyen/Desktop/Swan_Design_Aquatic_Center/db/migrations/20260225_create_service_requests.sql`

in Neon SQL editor (or your migration runner) before testing submissions.

## Manual verification checklist

1. Submit service form with no images.
2. Submit with 1 valid image (<2MB).
3. Submit with 2 valid images (<2MB each).
4. Try 3 images and confirm validation error.
5. Try an image >2MB and confirm validation error.
6. Query admin endpoint with a valid Bearer token and verify returned image URLs.
