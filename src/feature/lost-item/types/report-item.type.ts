export interface ReportItemFormData {
  itemName: string;
  category: string;
  description: string;
  foundDate: string;
  foundLocation: string;
  finderName: string;
  whatsapp: string;
  pickupLocation: string;
  image: File | null;
}