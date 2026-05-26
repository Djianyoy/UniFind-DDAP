import clsx from "clsx";

interface Props {
  status: "lost" | "found" | "wanted";
}

const badgeMap = {
  found: {
    label: "Ditemukan",
    className:
      "bg-green-100 text-green-500 border border-green-400",
  },
  lost: {
    label: "Hilang",
    className:
      "bg-red-100 text-red-400 border border-red-400",
  },
  wanted: {
    label: "Dicari",
    className:
      "bg-yellow-100 text-yellow-500 border border-yellow-400",
  },
};

export default function LostItemBadge({ status }: Props) {
  return (
    <div
      className={clsx(
        "absolute right-4 top-4 rounded-full px-4 py-1 text-xs font-medium shadow-lg",
        badgeMap[status].className
      )}
    >
      {badgeMap[status].label}
    </div>
  );
}