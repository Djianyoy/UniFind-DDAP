"use client";
import { LOST_ITEM_CATEGORIES } from "@/feature/lost-item/constants/lost-item.constants";
import { useLostItemFilter } from "@/feature/lost-item/hooks/useLostItemFilter";
import LostItemFilter from "@/feature/lost-item/components/LostItemFilter";
import LostItemGrid from "@/feature/lost-item/components/LostItemGrid";
import LostItemSearch from "@/feature/lost-item/components/LostItemSearch";
import ReportItemButton from "@/feature/lost-item/components/ReportItemButton";

export default function LostItemSection() {
  const { search, setSearch, category, setCategory, filteredItems } = useLostItemFilter();
  
  return (
    <section className=" relative overflow-hidden  bg-[#1C2C67] px-5 py-10 sm:px-8 lg:px-14 xl:px-20 min-h-screen" >
      <img
        src="/images/background/left-gradient.png"
        alt="background"
        className="absolute left-[-120px] top-[-100px] w-[260px] opacity-70 sm:w-[320px] lg:w-[420px] "
      />
      <img
        src="/images/background/right-gradient.png"
        alt="background"
        className="absolute bottom-[-120px] right-[-100px] w-[260px] opacity-70 sm:w-[320px] lg:w-[420px]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
        >
          <div className="max-w-2xl">
            <h1
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              Cari Barang
            </h1>
            <p
              className="mt-3 text-sm text-white/70 sm:text-base"
            >
              Temukan barangmu di halaman ini -- Filter berdasarkan kategori,
              tanggal, dan lokasi
            </p>
          </div>
          <ReportItemButton />
        </div>
        <div className="mt-8 flex flex-col gap-4 xl:flex-row">
          <div className="flex-1">
            <LostItemSearch value={search} onChange={setSearch} />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <LostItemFilter
              label="Tanggal"
              options={["Semua tanggal", "20 Maret 2026", "4 Mei 2026"]}
            />
            <LostItemFilter
              label="Tempat"
              options={[
                "Semua tempat",
                "Gedung F Filkom",
                "Gedung GKM",
                "Junction",
              ]}
            />
          </div>
        </div>
        <div
          className="mt-5 flex flex-wrap gap-3"
        >
          {LOST_ITEM_CATEGORIES.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-xs transition-all duration-300 ${category === item ? "bg-blue-500 text-white" : "bg-white/10 text-white/70"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-10">
          <LostItemGrid items={filteredItems} />
        </div>
      </div>
    </section>
  );
}
