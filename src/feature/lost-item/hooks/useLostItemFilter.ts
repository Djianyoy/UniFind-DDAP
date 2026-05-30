"use client";

import { useMemo, useState } from "react";
import { LostItem } from "@/feature/lost-item/types/lost-item.type";

export function useLostItemFilter(items: LostItem[]) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [date, setDate] = useState("Semua tanggal");
  const [location, setLocation] = useState("Semua tempat");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        category === "Semua" ||
        item.category === category;

      const matchDate =
        date === "Semua tanggal" ||
        item.date === date;

      const matchLocation =
        location === "Semua tempat" ||
        item.location === location;

      return (
        matchSearch &&
        matchCategory &&
        matchDate &&
        matchLocation
      );
    });
  }, [items, search, category, date, location]);

  return {
    search,
    setSearch,

    category,
    setCategory,

    date,
    setDate,

    location,
    setLocation,

    filteredItems,
  };
}