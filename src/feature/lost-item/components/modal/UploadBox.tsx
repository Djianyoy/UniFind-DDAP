"use client";

interface Props {
  onChange: (file: File | null) => void;
  preview?: string | null;
}

export default function UploadBox({
  onChange,
  preview,
}: Props) {
  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    onChange(file);
  }

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-white/80">
        Foto Barang
      </p>

      <label
        className="relative flex h-40 w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/20 bg-white/10 transition-all duration-300 hover:bg-white/15"
      >
        <input
          type="file"
          accept="image/png, image/jpeg, image/webp"
          className="hidden"
          onChange={handleFileChange}
        />

        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-lg font-semibold text-white/80">
              Klik atau seret foto ke sini
            </div>

            <p className="text-xs text-white/40">
              JPG, PNG, WEBP • Maks. 5MB
            </p>
          </div>
        )}
      </label>
    </div>
  );
}