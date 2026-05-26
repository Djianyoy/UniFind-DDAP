"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function LostItemSearch({ value, onChange }: Props) {
  return (
    <div
      className="
      flex h-12 items-center gap-3
      rounded-xl bg-white/10 px-4
      shadow-lg backdrop-blur-md
      w-full
    "
    >
      <div className="h-5 w-5">
        <img
          src="/images/icons/search.svg"
          alt="search"
          className="h-full w-full object-contain"
        />
      </div>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari nama barang, lokasi..."
        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
      />
    </div>
  );
}