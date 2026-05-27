"use client";

import { useState } from "react";
import { ReportItemFormData } from "../types/report-item.type";

export function useReportItemForm() {
  const [form, setForm] = useState<ReportItemFormData>({
    itemName: "",
    category: "",
    description: "",
    foundDate: "",
    foundLocation: "",
    finderName: "",
    whatsapp: "",
    pickupLocation: "",
    image: null,
  });

  function setField<K extends keyof ReportItemFormData>(
    key: K,
    value: ReportItemFormData[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return {
    form,
    setField,
  };
}