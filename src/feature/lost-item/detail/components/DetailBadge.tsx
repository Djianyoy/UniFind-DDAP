import { ItemStatus } from "@/feature/lost-item/detail/types/item-detail.type";

import { DETAIL_STATUS_CONFIG } from "@/feature/lost-item/detail/constants/detail-status.constants";

interface Props {
  status: ItemStatus;
}

export default function DetailBadge({
  status,
}: Props) {
  const config =
    DETAIL_STATUS_CONFIG[status];

  return (
    <div
      className={`rounded-full px-5 py-2 text-xs font-medium shadow ${config.badgeClass}`}
    >
      {config.label}
    </div>
  );
}