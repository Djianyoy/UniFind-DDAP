type FormInputProps = {
  label: string;
  placeholder: string;
  type?: string;
};

export default function FormInput({
  label,
  placeholder,
  type = "text",
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-white/80">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-violet-400"
      />
    </div>
  );
}