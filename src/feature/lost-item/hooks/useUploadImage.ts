"use client";

import { useState } from "react";

import { uploadImageToCloudinary } from "@/feature/lost-item/services/cloudinary.service";

export function useUploadImage() {
  const [loading, setLoading] = useState(false);

  async function uploadImage(file: File) {
    try {
      setLoading(true);

      const imageUrl =
        await uploadImageToCloudinary(file);

      return imageUrl;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    uploadImage,
  };
}