import Image from "next/image";

import DetailBadge from "./DetailBadge";

import { getImageSrc } from "../utils/get-image-src";

import { LostItem } from "../types/item-detail.type";

interface Props {
  item: LostItem;
}

export default function DetailHero({
  item,
}: Props) {
  return (
    <div
      className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md"
    >
      <div className="relative">

        <Image
          src={getImageSrc(item.image)}
          alt={item.title}
          width={1200}
          height={800}
          priority
          className="h-[240px] w-full object-cover sm:h-[300px] md:h-[360px] lg:h-[420px]"
        />

        <div className="absolute left-4 top-4 z-10">
          <DetailBadge status={item.status} />
        </div>
      </div>
    </div>
  );
}