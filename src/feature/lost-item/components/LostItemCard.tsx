import { LostItem } from "@/feature/lost-item/types/lost-item.type";
import LostItemBadge from "@/feature/lost-item/components/LostItemBadge";
import { useRouter } from "next/navigation";

interface Props {
  item: LostItem;
}

export default function LostItemCard({ item }: Props) {

  const router = useRouter();

  return (
   <div onClick={() => router.push(`/lost-item/${item.id}`)} className="h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      
      <div className="relative h-[180px] w-full flex-shrink-0 overflow-hidden bg-slate-400/20">
        
        <LostItemBadge status={item.status} />

        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-grow space-y-2 p-5">
        <h3 className="line-clamp-1 text-lg font-semibold text-white">
          {item.title}
        </h3>

        <p className="line-clamp-2 text-sm text-white/70">
          {item.description}
        </p>
      </div>
    </div>
  );
}