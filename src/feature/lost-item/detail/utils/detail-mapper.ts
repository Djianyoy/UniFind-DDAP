import { LostItem } from "@/feature/lost-item/detail/types/item-detail.type";

export function mapDetailFields(
  item: LostItem
) {
  if (
    item.status === "found" ||
    item.status === "lost"
  ) {
    return [
      {
        label: "Nama Barang",
        value: item.title,
      },

      {
        label: "Tanggal Ditemukan",
        value: item.date,
      },

      {
        label: "Tempat Ditemukan",
        value: item.location,
      },

      {
        label: "Penemu",
        value: item.personName || "-",
      },

      {
        label: "Kontak Penemu",
        value: item.whatsapp || "-",
      },

      {
        label: "Tempat Pengambilan",
        value:
          item.pickupLocation || "-",
      },
    ];
  }

  return [
    {
      label: "Nama Barang",
      value: item.title,
    },

    {
      label: "Terakhir Dilihat",
      value: item.location,
    },

    {
      label: "Pencari Barang",
      value: item.personName || "-",
    },

    {
      label: "Kontak Pencari Barang",
      value: item.whatsapp || "-",
    },
  ];
}