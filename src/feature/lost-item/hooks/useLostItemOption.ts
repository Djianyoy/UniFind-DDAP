import { LostItem } from "../types/lost-item.type";

export function useLostItemOptions(items: LostItem[]) {
  const itemsDate = items.map((item) => item.date);

  const itemsLocation = items.map(
    (item) => item.location
  );

  const optionsDate = [
    "Semua tanggal",
    ...Array.from(new Set(itemsDate)),
  ];

  const optionsLocation = [
    "Semua tempat",
    ...Array.from(new Set(itemsLocation)),
  ];

  return {
    optionsDate,
    optionsLocation,
  };
}