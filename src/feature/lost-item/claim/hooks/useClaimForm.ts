"use client";

import { useState } from "react";

export function useClaimForm() {
  const [preview, setPreview] =
    useState<string>("");

  const handleImageChange = (
    file: File
  ) => {
    const imageUrl =
      URL.createObjectURL(file);

    setPreview(imageUrl);
  };

  return {
    preview,
    handleImageChange,
  };
}