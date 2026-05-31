"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ReportItemForm from "@/feature/lost-item/components/modal/ReportItemForm";
import { LostItem } from "@/feature/lost-item/types/lost-item.type";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: LostItem) => void;
}

export default function ReportItemModal({ open, onClose, onSubmit }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (open && overlayRef.current && modalRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(
          modalRef.current,
          { scale: 0.9, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.1)", delay: 0.1 }
        );
      });
      return () => ctx.revert();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm "
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#1F2B6C] p-5 sm:p-8"
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
