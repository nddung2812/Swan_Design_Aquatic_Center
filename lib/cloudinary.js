import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Fetch all image URLs from a Cloudinary folder (build-time only).
 * Returns an array of optimised URLs, sorted by public_id.
 * Returns [] if the folder is empty or on error.
 */
export async function getFolderImages(folder) {
  try {
    const result = await cloudinary.api.resources_by_asset_folder(folder, {
      max_results: 50,
      resource_type: "image",
    });

    return result.resources
      .sort((a, b) => a.public_id.localeCompare(b.public_id))
      .map((r) =>
        cloudinary.url(r.public_id, {
          fetch_format: "auto",
          quality: "auto",
          secure: true,
        })
      );
  } catch {
    return [];
  }
}
