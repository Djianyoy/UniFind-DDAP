"use client";

import ReportItemForm from "@/feature/lost-item/components/modal/ReportItemForm";
import { LostItem } from "../../types/lost-item.type";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: LostItem) => void;
}

export default function ReportItemModal({ open, onClose, onSubmit }: Props) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 p-4 backdrop-blur-sm
      "
    >
      <div
        className="
          max-h-[95vh] w-full max-w-2xl overflow-y-auto
          rounded-3xl bg-[#1F2B6C]
          p-5
          sm:p-8
        "
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Lapor Barang Temuan</h2>

          <button
            onClick={onClose}
            className="text-white/60 transition-all hover:text-white"
          >
            ✕
          </button>
        </div>

        <ReportItemForm
          onSubmit={(data) => {
            onSubmit?.(data);
            onClose();
          }}
        />
      </div>
    </div>
  );
}
