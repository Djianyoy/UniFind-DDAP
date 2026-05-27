interface ReportButtonProps {
  onClick: () => void;
}

export default function ReportItemButton({ onClick }: ReportButtonProps) {
  return (
    <button 
      className="flex items-center justify-center gap-3 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-blue-400 w-full sm:w-fit"
      onClick={onClick}
    >
      <div className="h-10 w-10 rounded-full bg-white/20">
        <img src="/lost-item/icons/report-item-button-icon.svg" alt="report-icon" />
      </div>
      <span>Lapor Barang</span>
      <div className="h-5 w-5">
        <img
          src="/lost-item/icons/report-item-arrow-icon.svg"
          alt="arrow"
          className="h-full w-full object-contain"
        />
      </div>
    </button>
  );
}
