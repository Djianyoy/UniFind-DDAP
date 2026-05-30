"use client";

import { ReactNode } from "react";

type BaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function BaseModal({
  isOpen,
  onClose,
  children,
}: BaseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="relative max-h-[95vh] w-full max-w-[480px] overflow-y-auto rounded-3xl border border-white/10 bg-[#1B2559] p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-white/60 transition hover:text-white"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}