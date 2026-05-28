import { ReactNode } from "react"

type FilterDropdownProps = {
  children: ReactNode
}

export default function FilterDropdown({
  children,
}: FilterDropdownProps) {
  return (
    <div
      className="absolute z-50 mt-2 w-full rounded-xl border border-white/10 bg-[#24345F] p-3 shadow-2xl backdrop-blur-xl"
    >
      {children}
    </div>
  )
}