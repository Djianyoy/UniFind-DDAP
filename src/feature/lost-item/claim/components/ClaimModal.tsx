"use client";

import { claimLostItem } from "@/feature/lost-item/services/local-storage.service";
import BaseModal from "../../shared/components/modal/BaseModal";
import ClaimForm from "./ClaimForm";

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
  const handleSubmit = () => {
    claimLostItem(itemId);

    onSuccess();

    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ClaimForm
        onSubmit={handleSubmit}
      />
    </BaseModal>
  );
}