import FormLabel from "@/feature/lost-item/components/modal/FormLabel";

interface Props {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function FormTextarea({
  label,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <FormLabel>{label}</FormLabel>

      <textarea
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full resize-none rounded-lg border border-white/10
          bg-white/10 p-3 text-sm text-white
          outline-none transition-all
          placeholder:text-white/30
          focus:border-blue-400
        "
      />
    </div>
  );
}