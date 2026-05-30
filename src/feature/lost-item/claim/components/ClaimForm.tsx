"use client";

import ClaimUploadBox from "./ClaimUploadBox";
import { useClaimForm } from "../hooks/useClaimForm";

interface Props {
  onSubmit: () => void;
}

export default function ClaimForm({
  onSubmit,
}: Props) {
  const {
    form,
    updateField,
  } = useClaimForm();

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div>
        <label className="mb-2 block text-xs font-semibold text-white/80">
          Nama Lengkap *
        </label>

        <input
          value={form.fullName}
          onChange={(e) =>
            updateField(
              "fullName",
              e.target.value
            )
          }
          placeholder="Nama sesuai KTM"
          className="
            w-full
            rounded-lg
            border border-white/20
            bg-white/10
            px-3 py-3
            text-white
          "
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-2 block text-xs font-semibold text-white/80">
            NIM *
          </label>

          <input
            value={form.nim}
            onChange={(e) =>
              updateField(
                "nim",
                e.target.value
              )
            }
            placeholder="255xxxxxxxx"
            className="
              w-full
              rounded-lg
              border border-white/20
              bg-white/10
              px-3 py-3
              text-white
            "
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-white/80">
            Program Studi *
          </label>

          <input
            value={form.studyProgram}
            onChange={(e) =>
              updateField(
                "studyProgram",
                e.target.value
              )
            }
            placeholder="Teknologi Informasi"
            className="
              w-full
              rounded-lg
              border border-white/20
              bg-white/10
              px-3 py-3
              text-white
            "
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold text-white/80">
          Nomor WhatsApp *
        </label>

        <input
          value={form.whatsapp}
          onChange={(e) =>
            updateField(
              "whatsapp",
              e.target.value
            )
          }
          placeholder="08xxxxxxxxxxx"
          className="
            w-full
            rounded-lg
            border border-white/20
            bg-white/10
            px-3 py-3
            text-white
          "
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold text-white/80">
          Bukti Kepemilikan *
        </label>

        <textarea
          rows={4}
          value={form.ownershipProof}
          onChange={(e) =>
            updateField(
              "ownershipProof",
              e.target.value
            )
          }
          placeholder="Jelaskan ciri khusus barang..."
          className="
            w-full
            rounded-lg
            border border-white/20
            bg-white/10
            px-3 py-3
            text-white
          "
        />
      </div>

      <ClaimUploadBox
        file={form.proofImage}
        onChange={(file) =>
          updateField(
            "proofImage",
            file
          )
        }
      />

      <button
        type="submit"
        className="
          w-full
          rounded-3xl
          bg-violet-500
          py-4
          text-sm
          font-bold
          text-white
        "
      >
        Kirim laporan
      </button>
    </form>
  );
}