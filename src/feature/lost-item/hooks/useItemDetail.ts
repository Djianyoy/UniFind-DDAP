"use client";

import { useMemo } from "react";

import { getItemById } from "@/feature/lost-item/services/local-storage.service";

import { LostItem } from "@/feature/lost-item/detail/types/item-detail.type";

export function useItemDetail(
  id: string,
  refreshKey = 0
): LostItem | null {
  return useMemo(() => {
    return getItemById(id) ?? null;
  }, [id, refreshKey]);
}