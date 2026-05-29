import FormLabel from "@/feature/lost-item/components/modal/FormLabel";

interface Props {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function FormSelect({
  label,
  value,
  options,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <FormLabel>{label}</FormLabel>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-lg border border-white/10 bg-white/10 px-3 text-sm text-white outline-none"
      >
        <option value="">- Pilih Kategori -</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-slate-800"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}