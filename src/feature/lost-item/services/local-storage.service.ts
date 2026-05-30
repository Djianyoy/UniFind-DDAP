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

export function markItemAsFound(
  itemId: string
) {
  const items = getItems();

  const updatedItems = items.map((item) =>
    item.id === itemId
      ? {
          ...item,
          status: "found",
        }
      : item
  );

  localStorage.setItem(
    "lost-items",
    JSON.stringify(updatedItems)
  );

  return updatedItems;
}