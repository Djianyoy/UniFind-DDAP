"use client";

import { useMemo } from "react";

import { getItemById } from "../../services/local-storage.service";

export function useItemDetail(
  id: string,
  refreshKey: number
) {
  return useMemo(() => {
    return getItemById(id) || null;
  }, [id, refreshKey]);
}