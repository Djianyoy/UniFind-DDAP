"use client";

interface Props {
  label: string;
  options: string[];
}

export default function LostItemFilter({ label, options }: Props) {
  return (
    <div className="relative w-full sm:w-[220px]">
      <div
        className="
        rounded-xl
        bg-white/10
        p-3
        shadow-lg
        backdrop-blur-md
      "
      >
        <div className="mb-2 text-xs text-white/60">
          Search {label}
        </div>

        <input
          placeholder={`Cari ${label.toLowerCase()}...`}
          className="mb-3 w-full rounded-lg bg-white/10 px-3 py-2 text-sm text-white outline-none"
        />

        <select
          className="
          w-full rounded-lg
          bg-white/10 px-3 py-2
          text-sm text-white outline-none
        "
        >
          {options.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}