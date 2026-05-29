import { ItemStatus } from "@/feature/lost-item/detail/types/item-detail.type";

export const DETAIL_STATUS_CONFIG: Record<
  ItemStatus,
  {
    label: string;
    badgeClass: string;
  }
> = {
  found: {
    label: "Ditemukan",
    badgeClass:
      "border border-green-400 bg-green-100 text-green-700",
  },

  lost: {
    label: "Hilang",
    badgeClass:
      "border border-red-400 bg-red-100 text-red-700",
  },

  wanted: {
    label: "Dicari",
    badgeClass:
      "border border-yellow-400 bg-yellow-100 text-yellow-700",
  },
};