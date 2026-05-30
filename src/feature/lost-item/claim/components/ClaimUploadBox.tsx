"use client";

import { useMemo } from "react";
import { Camera } from "lucide-react";

interface Props {
  file: File | null;
  onChange: (
    file: File | null
  ) => void;
}

export default function ClaimUploadBox({
  file,
  onChange,
}: Props) {
  const previewUrl = useMemo(() => {
    if (!file) return null;

    return URL.createObjectURL(file);
  }, [file]);

  return (
    <div>
      <label
        className="
          mb-2 block
          text-xs
          font-semibold
          text-white/80
        "
      >
        Foto Bukti (opsional)
      </label>

      <label
        className="
          flex
          min-h-[160px]
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-lg
          border
          border-white/20
          bg-white/10
          p-6
        "
      >
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(e) =>
            onChange(
              e.target.files?.[0] ??
                null
            )
          }
        />

        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="
              max-h-[200px]
              rounded-lg
              object-cover
            "
          />
        ) : (
          <>
            <Camera
              size={36}
              className="text-white"
            />

            <p
              className="
                mt-4
                text-center
                text-base
                font-semibold
                text-white/80
              "
            >
              Klik atau seret foto ke sini
            </p>

            <p
              className="
                mt-1
                text-xs
                text-white/30
              "
            >
              JPG, PNG, WEBP • Maks. 5MB
            </p>
          </>
        )}
      </label>
    </div>
  );
}