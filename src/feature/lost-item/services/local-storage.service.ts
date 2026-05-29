import { LostItem } from "@/feature/lost-item/detail/types/item-detail.type";

const STORAGE_KEY = "lost-items";

export function getItems(): LostItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data =
    localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveItems(
  items: LostItem[]
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(items)
  );
}

export function addItem(item: LostItem) {
  const items = getItems();

  saveItems([item, ...items]);
}

export function getItemById(id: string) {
  const items = getItems();

  return items.find(
    (item) => item.id === id
  );
}