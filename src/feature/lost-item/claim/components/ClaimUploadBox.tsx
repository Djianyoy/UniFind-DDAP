"use client";

type Props = {
  preview: string;
  onChange: (file: File) => void;
};

export default function ClaimUploadBox({
  preview,
  onChange,
}: Props) {
  return (
    <label className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-white/30 bg-white/10">
      <input
        type="file"
        hidden
        accept="image/*"
        onChange={(e) => {
          const file =
            e.target.files?.[0];

          if (file) onChange(file);
        }}
      />

      {preview ? (
        <img
          src={preview}
          alt="preview"
          className="h-full w-full rounded-lg object-cover"
        />
      ) : (
        <>
          <p className="text-white">
            Klik atau seret foto
          </p>

          <p className="text-xs text-white/40">
            JPG PNG WEBP
          </p>
        </>
      )}
    </label>
  );
}