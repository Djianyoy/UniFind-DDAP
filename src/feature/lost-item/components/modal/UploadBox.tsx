// import { ImagePlus } from "lucide-react";

interface Props {
  onChange: (file: File | null) => void;
}

export default function UploadBox({ onChange }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-white/80">
        Foto Barang
      </label>

      <label
        className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/10 px-5 py-10 text-center transition-all hover:bg-white/15"
      >
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(e) =>
            onChange(e.target.files?.[0] || null)
          }
        />

        {/* <ImagePlus className="mb-4 h-10 w-10 text-white/70" /> */}

        <p className="text-base font-semibold text-white/80">
          Klik atau seret foto ke sini
        </p>

        <p className="mt-1 text-xs text-white/30">
          JPG, PNG, WEBP • Maks. 5MB
        </p>
      </label>
    </div>
  );
}