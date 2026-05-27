type FilterOptionProps = {
  label: string
  isSelected?: boolean
  onClick: () => void
}

export default function FilterOption({
  label,
  isSelected,
  onClick,
}: FilterOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-all duration-200 ${isSelected ? "bg-blue-500 text-white" : "text-white hover:bg-white/10"} `}
    >
      {label}
    </button>
  )
}