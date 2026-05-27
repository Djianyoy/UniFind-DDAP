"use client";

import { useMemo, useState } from "react";

import { DUMMY_LOST_ITEMS } from "@/feature/lost-item/data/dummy-lost-item";

import {
  LOST_ITEM_CATEGORIES,
  DEFAULT_DATE,
  DEFAULT_LOCATION,
} from "@/feature/lost-item/constants/lost-item.constants";

export function useLostItemFilter() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState(LOST_ITEM_CATEGORIES[0]);

  const [date, setDate] = useState(DEFAULT_DATE);

  const [location, setLocation] = useState(DEFAULT_LOCATION);

  const filteredItems = useMemo(() => {
    return DUMMY_LOST_ITEMS.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        category === LOST_ITEM_CATEGORIES[0] ||
        item.category === category;

      const matchDate =
        date === DEFAULT_DATE ||
        item.date === date;

      const matchLocation =
        location === DEFAULT_LOCATION ||
        item.location === location;

      return (
        matchSearch &&
        matchCategory &&
        matchDate &&
        matchLocation
      );
    });
  }, [search, category, date, location]);

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