import { LostItem } from "@/feature/lost-item/types/lost-item.type";
import LostItemCard from "@/feature/lost-item/components/LostItemCard";
interface Props {
  items: LostItem[];
}

export default function LostItemGrid({ items }: Props) {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
    >
      {items.map((item) => (
        <LostItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}