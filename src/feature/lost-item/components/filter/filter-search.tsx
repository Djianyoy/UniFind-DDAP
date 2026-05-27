type FilterSearchProps = {
  value: string
  placeholder: string
  onChange: (value: string) => void
}

export default function FilterSearch({
  value,
  placeholder,
  onChange,
}: FilterSearchProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="mb-3 w-full rounded-lg bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-white/50"
    />
  )
}