import { LostItem } from "../types/item-detail.type";

interface Props {
  item: LostItem;
}

export default function DetailActionButton({
  item,
}: Props) {
  if (item.status === "found") {
    return null;
  }

  if (item.status === "wanted") {
    return (
      <a
        href={`https://wa.me/${item.whatsapp}`}
        target="_blank"
        className="flex w-full items-center justify-center rounded-2xl bg-green-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-green-400"
      >
        Hubungi pencari barang
      </a>
    );
  }

  return (
    <button
      className=" w-full rounded-2xl bg-violet-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-violet-400
      "
    >
      Klaim Barang
    </button>
  );
}