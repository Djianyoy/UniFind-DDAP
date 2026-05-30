"use client";

import { useState } from "react";
import { ClaimFormData } from "../types/claim-form.type";

export function useClaimForm() {
  const [form, setForm] =
    useState<ClaimFormData>({
      fullName: "",
      nim: "",
      studyProgram: "",
      whatsapp: "",
      ownershipProof: "",
      proofImage: null,
    });

  const updateField = (
    field: keyof ClaimFormData,
    value: string | File | null
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    form,
    updateField,
  };
}