import { DUMMY_LOST_ITEMS } from "@/feature/lost-item/data/dummy-lost-item";

export function useLostItemOptions() {
  const itemsDate = DUMMY_LOST_ITEMS.map((item) => item.date);

  const itemsLocation = DUMMY_LOST_ITEMS.map(
    (item) => item.location
  );

  const optionsDate =
    itemsDate.length > 0
      ? ["Semua tanggal", ...Array.from(new Set(itemsDate))]
      : ["Semua tanggal"];

  const optionsLocation =
    itemsLocation.length > 0
      ? ["Semua tempat", ...Array.from(new Set(itemsLocation))]
      : ["Semua tempat"];

  return {
    optionsDate,
    optionsLocation,
  };
}