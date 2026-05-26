"use client";

import { useMemo, useState } from "react";
import { DUMMY_LOST_ITEMS } from "@/feature/lost-item/data/dummy-lost-item";

export function useLostItemFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  const filteredItems = useMemo(() => {
    return DUMMY_LOST_ITEMS.filter((item) => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "Semua" || item.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    filteredItems,
  };
}