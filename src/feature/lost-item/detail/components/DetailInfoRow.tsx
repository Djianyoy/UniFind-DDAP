interface Props {
  label: string;
  value: string;
}

export default function DetailInfoRow({
  label,
  value,
}: Props) {
  return (
    <div className="border-b border-white/10 pb-4">
      <p className="text-xs text-white/50">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-white sm:text-base">
        {value}
      </p>
    </div>
  );
}