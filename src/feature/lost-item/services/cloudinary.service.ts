import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
} from "@/feature/lost-item/constants/cloudinary";

// import { CloudinaryUploadResponse } from "@/feature/lost-item/types/cloudinary.type";

export async function uploadImageToCloudinary(
  file: File
) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET!);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Upload gagal");
  }

  const data = await response.json();

  return data.secure_url;
}

export async function uploadImage(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
  );

  formData.append(
    "folder",
    "Unifind-DDAP"
  );

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  console.log(data);

  return data;
}