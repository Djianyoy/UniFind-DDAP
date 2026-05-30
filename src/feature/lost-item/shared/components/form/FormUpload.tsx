import { ImageIcon } from "lucide-react";

export default function FormUpload() {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-white/80">
        Foto Bukti (opsional)
      </label>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/10 px-6 py-10 transition hover:bg-white/15">
        <ImageIcon className="mb-4 h-10 w-10 text-white/80" />

        <p className="text-center text-base font-semibold text-white/80">
          Klik atau seret foto ke sini
        </p>

        <p className="mt-1 text-xs text-white/30">
          JPG, PNG, WEBP · Maks. 5MB
        </p>

        <input type="file" className="hidden" />
      </label>
    </div>
  );
}