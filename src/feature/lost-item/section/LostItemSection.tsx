"use client";

import { useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { LOST_ITEM_CATEGORIES } from "@/feature/lost-item/constants/lost-item.constants";

import LostItemFilter from "@/feature/lost-item/components/filter/LostItemFilter";
import LostItemGrid from "@/feature/lost-item/components/LostItemGrid";
import LostItemSearch from "@/feature/lost-item/components/LostItemSearch";
import ReportItemButton from "@/feature/lost-item/components/ReportItemButton";
import ReportItemModal from "@/feature/lost-item/components/modal/ReportItemModal";

import { useLostItemFilter } from "@/feature/lost-item/hooks/useLostItemFilter";
import { useLostItemOptions } from "@/feature/lost-item/hooks/useLostItemOption";
import { useLostItemStorage } from "@/feature/lost-item/hooks/useLostItemStorage";

export default function LostItemSection() {
  const { items, addItem } = useLostItemStorage();

  const {
    search,
    setSearch,

    category,
    setCategory,

    date,
    setDate,

    location,
    setLocation,

    filteredItems,
  } = useLostItemFilter(items);

  const { optionsDate, optionsLocation } =
    useLostItemOptions(items);

  const [openModal, setOpenModal] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const reportBtnRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const topShapeRef = useRef<HTMLImageElement>(null);
  const bottomShapeRef = useRef<HTMLImageElement>(null);

  // — Mount-only entrance animations (runs once) —
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background shapes: gentle floating loop
      if (topShapeRef.current) {
        gsap.to(topShapeRef.current, {
          y: 18,
          x: 8,
          rotation: 2,
          duration: 6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      if (bottomShapeRef.current) {
        gsap.to(bottomShapeRef.current, {
          y: -18,
          x: -8,
          rotation: -2,
          duration: 7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // Hero entrance timeline
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      if (heroTextRef.current) {
        heroTl.fromTo(
          heroTextRef.current.children,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, stagger: 0.2 }
        );
      }

      if (reportBtnRef.current) {
        heroTl.fromTo(
          reportBtnRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        );
      }

      // Search bar slides up
      if (searchBarRef.current) {
        heroTl.fromTo(
          searchBarRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
      }

      // Filter dropdowns slide up
      if (filtersRef.current) {
        heroTl.fromTo(
          filtersRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out" },
          "-=0.5"
        );
      }

      // Category chips stagger in
      if (categoriesRef.current) {
        heroTl.fromTo(
          categoriesRef.current.children,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.4)" },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // — Grid cards animation (re-runs when filtered items change) —
  useLayoutEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".lost-item-card");
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filteredItems]);

  return (
    <section
      ref={sectionRef}
      className=" relative min-h-screen overflow-hidden bg-[#1C2C58] px-5 py-24 sm:px-8 lg:px-14
      "
    >
      <img
        ref={topShapeRef}
        src="/lost-item/shapes/top-shape.svg"
        alt="background"
        className="absolute left-[-120px] top-[-100px] w-[260px] opacity-70 sm:w-[320px] lg:w-[420px]"
      />

      <img
        ref={bottomShapeRef}
        src="/lost-item/shapes/bottom-shape.svg"
        alt="background"
        className="absolute bottom-[-120px] right-[-100px] w-[260px] opacity-70 sm:w-[320px] lg:w-[420px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
        >
          <div ref={heroTextRef} className="max-w-2xl">
            <h1
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              Cari Barang
            </h1>

            <p className="mt-3 text-sm text-white/70 sm:text-base">
              Temukan barangmu di halaman ini —
              Filter berdasarkan kategori,
              tanggal, dan lokasi
            </p>
          </div>

          <div ref={reportBtnRef}>
            <ReportItemButton
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>

        <div
          className="mt-8 flex flex-col gap-4 xl:flex-row"
        >
          <div ref={searchBarRef} className="flex-1">
            <LostItemSearch
              value={search}
              onChange={setSearch}
            />
          </div>

          <div ref={filtersRef} className="flex flex-col gap-4 sm:flex-row">
            <LostItemFilter
              label="Semua tanggal"
              options={optionsDate}
              value={date}
              imageUrl="/lost-item/icons/calendar-icon.svg"
              onChange={setDate}
            />

            <LostItemFilter
              label="Semua tempat"
              options={optionsLocation}
              value={location}
              imageUrl="/lost-item/icons/location-icon.svg"
              onChange={setLocation}
            />
          </div>
        </div>

        <div ref={categoriesRef} className="mt-5 flex flex-wrap gap-3">
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

        <div ref={gridRef} className="mt-10">
          <LostItemGrid items={filteredItems} />
        </div>
      </div>

      <ReportItemModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={addItem}
      />
    </section>
  );
}