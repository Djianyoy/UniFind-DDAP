"use client";

import { ArrowLeft } from "lucide-react";

import Link from "next/link";

export default function DetailBackButton() {
  return (
    <Link
      href="/lost-item"
      className=" inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
    >
      <ArrowLeft size={18} />

      <span>Kembali ke daftar</span>
    </Link>
  );
}