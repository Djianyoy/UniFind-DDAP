interface Props {
  description: string;
}

export default function DetailDescription({
  description,
}: Props) {
  return (
    <div
      className=" rounded-3xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md"
    >
      <h2 className="text-sm font-bold uppercase text-white/60">
        Deskripsi
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-white sm:text-base">
        {description}
      </p>
    </div>
  );
}