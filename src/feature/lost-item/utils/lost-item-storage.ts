import { LostItem } from "@/feature/lost-item/types/lost-item.type";

const STORAGE_KEY = "lost-items";

export function getStoredLostItems(): LostItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  const stored =
    localStorage.getItem(STORAGE_KEY);

  return stored ? JSON.parse(stored) : [];
}

export function saveLostItems(
  items: LostItem[],
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(items),
  );
}