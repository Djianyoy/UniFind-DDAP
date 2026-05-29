import FormLabel from "@/feature/lost-item/components/modal/FormLabel";

interface Props {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function FormInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <FormLabel>{label}</FormLabel>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-lg border border-white/10 bg-white/10 px-3 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-blue-400"
      />
    </div>
  );
}