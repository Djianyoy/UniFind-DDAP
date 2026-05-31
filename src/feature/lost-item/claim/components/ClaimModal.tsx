"use client";

import { useState } from "react";

import { markItemAsFound } from "@/feature/lost-item/services/local-storage.service";

interface Props {
  isOpen: boolean;
  itemId: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ClaimModal({
  isOpen,
  itemId,
  onClose,
  onSuccess,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const [imagePreview, setImagePreview] =
    useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    markItemAsFound(itemId);

    setLoading(false);

    onSuccess();
  };

  return (
    <div
      className=" fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
    >
      <div
        className=" max-h-[90vh] w-full max-w-[473px] overflow-y-auto rounded-3xl bg-[#1B2559] p-10"
      >
        <h2
          className=" mb-8 text-xl font-semibold text-white
          "
        >
          Klaim Barang
        </h2>

        <div
          className=" mb-8 rounded-lg border border-[#1B2559] bg-slate-800 p-4"
        >
          <p
            className="
              text-xs
              text-gray-400
            "
          >
            Sebelum mengklaim,
            pastikan kamu adalah
            pemilik sah barang ini.
          </p>

          <p
            className=" mt-2 text-xs text-gray-500"
          >
            Klaim palsu dapat
            dikenakan sanksi sesuai
            peraturan kampus.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label
              className=" mb-1 block text-xs font-semibold text-white/80"
            >
              Nama Lengkap *
            </label>

            <input
              className=" w-full rounded-lg border border-white/20 bg-white/10 px-3 py-3 text-white placeholder:text-white/30"
              placeholder="Nama sesuai KTM"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                className=" mb-1 block text-xs font-semibold text-white/80"
              >
                NIM *
              </label>

              <input
                className=" w-full rounded-lg border border-white/20 bg-white/10 px-3 py-3 text-white placeholder:text-white/30"
                placeholder="255xxxxxxxx"
              />
            </div>

            <div>
              <label
                className=" mb-1 block text-xs font-semibold text-white/80"
              >
                Program Studi *
              </label>

              <input
                className=" w-full rounded-lg border border-white/20 bg-white/10 px-3 py-3 text-white placeholder:text-white/30"
                placeholder="Teknologi Informasi"
              />
            </div>
          </div>

          <div>
            <label
              className=" mb-1 block text-xs font-semibold text-white/80"
            >
              Nomor WhatsApp *
            </label>

            <input
              className=" w-full rounded-lg border border-white/20 bg-white/10 px-3 py-3 text-white placeholder:text-white/30"
              placeholder="08xxxxxxxxxxx"
            />
          </div>

          <div>
            <label
              className=" mb-1 block text-xs font-semibold text-white/80"
            >
              Bukti Kepemilikan *
            </label>

            <textarea
              rows={4}
              className=" w-full rounded-lg border border-white/20 bg-white/10 px-3 py-3 text-white placeholder:text-white/30"
              placeholder="
Jelaskan ciri khusus barang yang hanya diketahui pemilik (misalnya nomor seri, stiker, goresan khas, isi dompet, dll.)
"
            />
          </div>

          <div>
            <label
              className=" mb-2 block text-xs font-semibold text-white/80"
            >
              Foto Bukti (opsional)
            </label>

            <label
              className=" block cursor-pointer rounded-lg border border-dashed border-white/20 bg-white/10 p-6"
            >
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file =
                    e.target.files?.[0];

                  if (!file) return;

                  setImagePreview(
                    URL.createObjectURL(file)
                  );
                }}
              />

              {!imagePreview ? (
                <div className="text-center">
                  <p
                    className=" text-base font-semibold text-white/80"
                  >
                    Klik atau seret foto
                    ke sini
                  </p>

                  <p
                    className=" mt-1 text-xs text-white/30"
                  >
                    JPG, PNG, WEBP •
                    Maks. 5MB
                  </p>
                </div>
              ) : (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className=" h-52 w-full rounded-xl object-cover
                  "
                />
              )}
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className=" w-full rounded-3xl bg-violet-500 py-4 text-sm font-bold text-white transition hover:bg-violet-400 disabled:opacity-60"
            >
              {loading
                ? "Mengirim..."
                : "Kirim Laporan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}