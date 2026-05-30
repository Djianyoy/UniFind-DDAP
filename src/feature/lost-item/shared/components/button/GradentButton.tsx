type GradientButtonProps = {
  children: React.ReactNode;
};

export default function GradientButton({
  children,
}: GradientButtonProps) {
  return (
    <button
      className="
        w-full rounded-full
        bg-gradient-to-r
        from-[#7B5CFA]
        to-[#8B5CF6]
        px-6 py-4
        text-sm font-semibold text-white
        transition hover:opacity-90
      "
    >
      {children}
    </button>
  );
}