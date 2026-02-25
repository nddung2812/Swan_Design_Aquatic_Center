export const MAX_IMAGES = 2;
export const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024;

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function asTrimmedString(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

export function normalizeServiceRequestFields(rawFields) {
  return {
    name: asTrimmedString(rawFields.name),
    email: asTrimmedString(rawFields.email).toLowerCase(),
    phone: asTrimmedString(rawFields.phone),
    location: asTrimmedString(rawFields.location),
    service: asTrimmedString(rawFields.service),
    message: asTrimmedString(rawFields.message),
  };
}

export function validateRequiredFields(fields) {
  if (!fields.name) {
    return { error: "Name is required", field: "name" };
  }

  if (!fields.email) {
    return { error: "Email is required", field: "email" };
  }

  if (!fields.phone) {
    return { error: "Phone number is required", field: "phone" };
  }

  if (!fields.location) {
    return { error: "Location is required", field: "location" };
  }

  if (!fields.service) {
    return { error: "Service type is required", field: "service" };
  }

  return null;
}

export function validateEmail(email) {
  if (!EMAIL_REGEX.test(email)) {
    return { error: "Invalid email address", field: "email" };
  }

  return null;
}

export function getImageValidationError(filesInput) {
  const files = Array.from(filesInput ?? []);

  if (files.length > MAX_IMAGES) {
    return `You can upload a maximum of ${MAX_IMAGES} images.`;
  }

  for (const file of files) {
    if (!file || typeof file !== "object") {
      return "Invalid image upload.";
    }

    if (typeof file.type !== "string" || !file.type.startsWith("image/")) {
      return "Only image files are allowed.";
    }

    if (typeof file.size !== "number" || file.size > MAX_IMAGE_SIZE_BYTES) {
      return "Each image must be 2MB or smaller.";
    }
  }

  return null;
}
