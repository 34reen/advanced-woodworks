import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(
  file: File,
  folder: string
): Promise<string> {
  const bytes = await file.arrayBuffer();

  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Upload failed"));
          return;
        }

        resolve(result.secure_url);
      }
    );

    stream.end(buffer);
  });
}

export function getCloudinaryPublicId(
  imageUrl: string | null | undefined
): string | null {
  if (!imageUrl) {
    return null;
  }

  let url: URL;

  try {
    url = new URL(imageUrl);
  } catch {
    return null;
  }

  if (url.hostname !== "res.cloudinary.com") {
    return null;
  }

  const pathParts = url.pathname
    .split("/")
    .filter(Boolean);

  const uploadIndex = pathParts.indexOf("upload");

  if (uploadIndex === -1) {
    return null;
  }

  const publicIdParts = pathParts.slice(uploadIndex + 1);

  if (/^v\d+$/.test(publicIdParts[0] ?? "")) {
    publicIdParts.shift();
  }

  if (!publicIdParts.length) {
    return null;
  }

  const publicId = publicIdParts.join("/");
  const extensionIndex = publicId.lastIndexOf(".");

  return decodeURIComponent(
    extensionIndex === -1
      ? publicId
      : publicId.slice(0, extensionIndex)
  );
}

export async function deleteImage(
  imageUrl: string | null | undefined
): Promise<void> {
  const publicId = getCloudinaryPublicId(imageUrl);

  if (!publicId) {
    return;
  }

  await cloudinary.uploader.destroy(publicId, {
    resource_type: "image",
  });
}
