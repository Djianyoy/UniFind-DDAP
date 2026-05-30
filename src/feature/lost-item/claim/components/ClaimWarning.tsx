export default function ClaimWarning() {
  return (
    <div
      className="
        rounded-md
        bg-slate-800
        px-4
        py-3
      "
    >
      <p className="text-xs text-gray-400">
        Sebelum mengklaim, pastikan kamu
        adalah pemilik sah barang ini.
      </p>

      <p className="mt-1 text-xs text-gray-500">
        Klaim palsu dapat dikenakan
        sanksi sesuai peraturan kampus.
      </p>
    </div>
  );
}