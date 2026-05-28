interface Props {
  children: React.ReactNode;
}

export default function FormLabel({ children }: Props) {
  return (
    <label className="text-xs font-semibold text-white/80">
      {children}
    </label>
  );
}