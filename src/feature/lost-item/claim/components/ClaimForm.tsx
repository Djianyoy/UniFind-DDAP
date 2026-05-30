import FormInput from "../../shared/components/form/FormInput";
import FormTextarea from "@/feature/lost-item/shared/components/form/FormTextArea";
import FormUpload from "../../shared/components/form/FormUpload";
import GradientButton from "@/feature/lost-item/shared/components/button/GradentButton";

interface Props {
  onSubmit: () => void;
}

export default function ClaimForm({ onSubmit }: Props) {
  {
    return (
      <form className="space-y-6" onSubmit={onSubmit}>
        <FormInput label="Nama Lengkap *" placeholder="Nama sesuai KTM" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput label="NIM *" placeholder="255xxxxxxxx" />

          <FormInput
            label="Program Studi *"
            placeholder="Teknologi Informasi"
          />
        </div>

        <FormInput label="Nomor WhatsApp *" placeholder="08xxxxxxxxxx" />

        <FormTextarea
          label="Bukti Kepemilikan *"
          placeholder="Jelaskan ciri khusus barang yang hanya diketahui pemilik..."
        />

        <FormUpload />

        <GradientButton>Kirim Laporan</GradientButton>
      </form>
    );
  }
}
