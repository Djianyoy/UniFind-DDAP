import DetailActionButton from "@/feature/lost-item/detail/components/DetailActionButton";
import DetailInfoRow from "@/feature/lost-item/detail/components/DetailInfoRow";

import { LostItem } from "@/feature/lost-item/detail/types/item-detail.type";
import { mapDetailFields } from "@/feature/lost-item/detail/utils/detail-mapper";

interface Props {
  item: LostItem;
  onClaimClick: () => void;
}

export default function DetailInfoCard({ item, onClaimClick }: Props) {
  const fields = mapDetailFields(item);

  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-6 lg:p-7">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          {item.title}
        </h1>

        <p className="mt-2 text-sm text-white/70">
          {item.category} • {item.date}
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {fields.map((field) => (
          <DetailInfoRow
            key={field.label}
            label={field.label}
            value={field.value}
          />
        ))}
      </div>

      <div className="mt-8">
        <DetailActionButton item={item} onClaimClick={onClaimClick} />{" "}
      </div>
    </div>
  );
}
