"use client";

import { useEffect, useState } from "react";

import { DUMMY_LOST_ITEMS } from "../data/dummy-lost-item";
import { LostItem } from "../types/lost-item.type";

const STORAGE_KEY = "lost-items";

export function useLostItemStorage() {
  const [items, setItems] = useState<LostItem[]>(() => {
    if (typeof window === "undefined") {
      return DUMMY_LOST_ITEMS;
    }

    const storedItems =
      localStorage.getItem(STORAGE_KEY);

    if (!storedItems) {
      return DUMMY_LOST_ITEMS;
    }

    try {
      return JSON.parse(storedItems);
    } catch {
      return DUMMY_LOST_ITEMS;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items),
    );
  }, [items]);

  function addItem(item: LostItem) {
  const updatedItems = [item, ...items];

  setItems(updatedItems);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedItems)
  );
}

console.log("FORM SUBMIT");
console.log(items);

  return {
    items,
    addItem,
  };
}