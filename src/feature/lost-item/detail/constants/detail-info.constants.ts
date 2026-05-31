import { ItemStatus } from "@/feature/lost-item/detail/types/item-detail.type";

export const DETAIL_INFO_LABELS = {
  found: {
    person: "Penemu",
    date: "Tanggal Ditemukan",
    location: "Tempat Ditemukan",
  },

  lost: {
    person: "Penemu",
    date: "Tanggal Ditemukan",
    location: "Tempat Ditemukan",
  },

  wanted: {
    person: "Pencari Barang",
    date: "Tanggal Hilang",
    location: "Terakhir Dilihat",
  },
} satisfies Record<
  ItemStatus,
  {
    person: string;
    date: string;
    location: string;
  }
>;