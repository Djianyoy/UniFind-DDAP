export type LostItemStatus = "lost" | "found" | "wanted";

export interface LostItem {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  category: string;
  image: string;
  status: LostItemStatus;
  
}