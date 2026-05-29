"use client";

import { useState } from "react";

import { ReportItemFormData } from "@/feature/lost-item/types/report-item.type";

const initialState: ReportItemFormData = {
  itemName: "",
  category: "",
  description: "",
  foundDate: "",
  foundLocation: "",
  finderName: "",
  whatsapp: "",
  pickupLocation: "",
  image: null,
};

export function useReportItemForm() {
  const [form, setForm] =
    useState<ReportItemFormData>(initialState);

  function setField<
    K extends keyof ReportItemFormData
  >(
    key: K,
    value: ReportItemFormData[K],
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function resetForm() {
    setForm(initialState);
  }

  return {
    form,
    setField,
    resetForm,
  };
}