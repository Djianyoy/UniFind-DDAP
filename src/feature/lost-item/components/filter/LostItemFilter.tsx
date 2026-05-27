"use client"

import { useMemo, useState } from "react"

import FilterDropdown from "@/feature/lost-item/components/filter/filter-dropdown"
import FilterOption from "@/feature/lost-item/components/filter/filter-option"
import FilterSearch from "@/feature/lost-item/components/filter/filter-search"

type LostItemFilterProps = {
  label: string
  value: string
  options: string[]
  imageUrl: string
  onChange: (value: string) => void
}

export default function LostItemFilter({
  label,
  value,
  options,
  imageUrl,
  onChange,
}: LostItemFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")

  const filteredOptions = useMemo(() => {
    return options.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    )
  }, [options, search])

  return (
    <div className="relative w-full sm:w-[220px]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-12 w-full items-center justify-between rounded-xl bg-white/10 px-4 text-sm text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20">
        <div className="h-5 w-5">
        <img
          src={imageUrl}
          alt="search"
          className="h-full w-full object-contain"
        />
      </div>
        <span>{value || label}</span>

        <span className="text-xs">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <FilterDropdown>
          <FilterSearch
            value={search}
            placeholder={`Cari ${label.toLowerCase()}...`}
            onChange={setSearch}
          />

          <div className="max-h-52 overflow-y-auto">
            {filteredOptions.map((option) => (
              <FilterOption
                key={option}
                label={option}
                isSelected={value === option}
                onClick={() => {
                  onChange(option)
                  setIsOpen(false)
                  setSearch("")
                }}
              />
            ))}

            {filteredOptions.length === 0 && (
              <div className="px-3 py-2 text-sm text-white/50">
                Data tidak ditemukan
              </div>
            )}
          </div>
        </FilterDropdown>
      )}
    </div>
  )
}