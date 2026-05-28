import { LostItem } from "@/feature/lost-item/types/lost-item.type";

export const DUMMY_LOST_ITEMS: LostItem[] = [
  {
    id: "1",
    title: "Kunci Motor Honda",
    description: "Gedung G Filkom · 20 Maret 2026",
    location: "Gedung G Filkom",
    date: "20 Maret 2026",
    category: "Kunci",
    image: "/lost-item/images/kunci-motor-card-image.svg",
    status: "found",
  },
  {
    id: "2",
    title: "KTP",
    description: "Junction · 4 Mei 2026",
    location: "Junction",
    date: "4 Mei 2026",
    category: "Dokumen",
    image: "/lost-item/images/ktp-card-item.jpg",
    status: "lost",
  },
  {
    id: "3",
    title: "Hp Iphone 20 Pro Max 2TB",
    description: "Gedung F Filkom · 28 Februari 2026",
    location: "Gedung F Filkom",
    date: "28 Februari 2026",
    category: "Elektronik",
    image: "/lost-item/images/phone-card-image.png",
    status: "wanted",
  },
  {
    id: "4",
    title: "Dompet",
    description: "Gedung GKM · 20 Maret 2026",
    location: "Gedung GKM",
    date: "20 Maret 2026",
    category: "Dompet",
    image: "/lost-item/images/dompet-card-image.jpg",
    status: "lost",
  },
];