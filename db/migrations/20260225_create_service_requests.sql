CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  service text NOT NULL,
  message text,
  image_urls text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT service_requests_image_urls_max_two
    CHECK (cardinality(image_urls) <= 2)
);

CREATE INDEX IF NOT EXISTS idx_service_requests_created_at
  ON service_requests (created_at DESC);
