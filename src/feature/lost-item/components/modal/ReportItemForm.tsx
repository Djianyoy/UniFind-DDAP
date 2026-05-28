"use client";

import FormInput from "@/feature/lost-item/components/modal/FormInput";
import FormTextarea from "@/feature/lost-item/components/modal/FormTextarea";
import FormSelect from "@/feature/lost-item/components/modal/FormSelect";
import UploadBox from "@/feature/lost-item/components/modal/UploadBox";

import { REPORT_ITEM_CATEGORIES } from "@/feature/lost-item/constants/report-item.constants";

import { useReportItemForm } from "@/feature/lost-item/hooks/useReportItemForm";

import { LostItem } from "@/feature/lost-item/types/lost-item.type";

interface Props {
  onSubmit: (data: LostItem) => void;
}

export default function ReportItemForm({ onSubmit }: Props) {
  const { form, setField, resetForm } = useReportItemForm();

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const newItem: LostItem = {
    id: crypto.randomUUID(),
    title: form.itemName,
    description: form.description,
    category: form.category,
    date: form.foundDate,
    location: form.foundLocation,
    image:
      form.image
        ? URL.createObjectURL(form.image)
        : "/lost-item/default.png",
    status: "found",
  };

  onSubmit?.(newItem);

  resetForm();
}

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <FormInput
        label="Nama Barang *"
        placeholder="Contoh: Kunci Motor Honda Beat"
        value={form.itemName}
        onChange={(value) => setField("itemName", value)}
      />

      <FormSelect
        label="Kategori"
        value={form.category}
        options={REPORT_ITEM_CATEGORIES}
        onChange={(value) => setField("category", value)}
      />

      <FormTextarea
        label="Deskripsi Barang"
        placeholder="Deskripsikan ciri-ciri barang..."
        value={form.description}
        onChange={(value) => setField("description", value)}
      />

      <div
        className="
          grid grid-cols-1 gap-4
          md:grid-cols-2
        "
      >
        <FormInput
          label="Tanggal Ditemukan *"
          type="date"
          value={form.foundDate}
          onChange={(value) => setField("foundDate", value)}
        />

        <FormInput
          label="Tempat Ditemukan *"
          placeholder="Contoh: Gedung G FILKOM"
          value={form.foundLocation}
          onChange={(value) => setField("foundLocation", value)}
        />
      </div>

      <div
        className="
          grid grid-cols-1 gap-4
          md:grid-cols-2
        "
      >
        <FormInput
          label="Nama Penemu"
          placeholder="Nama Lengkap Kamu"
          value={form.finderName}
          onChange={(value) => setField("finderName", value)}
        />

        <FormInput
          label="Kontak (WhatsApp) *"
          placeholder="08xxxxxxxxxx"
          value={form.whatsapp}
          onChange={(value) => setField("whatsapp", value)}
        />
      </div>

      <FormInput
        label="Tempat Pengambilan"
        placeholder="Contoh: Sekretariat BEM FILKOM"
        value={form.pickupLocation}
        onChange={(value) => setField("pickupLocation", value)}
      />

      <UploadBox onChange={(file) => setField("image", file)} />

      <button
        type="submit"
        className="
          h-12 w-full rounded-full
          bg-gradient-to-r
          from-blue-500 to-violet-500
          text-sm font-semibold text-white
          transition-all duration-300
          hover:scale-[1.01]
        "
      >
        Kirim laporan
      </button>
    </form>
  );
}
