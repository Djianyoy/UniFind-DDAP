export type ItemStatus =
  | "found"
  | "lost"
  | "wanted";

export interface LostItem {
  id: string;

  title: string;
  description: string;

  image: string;

  status: ItemStatus;

  category: string;

  date: string;
  location: string;

  personName: string;

  whatsapp: string;

  pickupLocation?: string;
}