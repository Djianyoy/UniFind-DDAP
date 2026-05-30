import React from 'react';

interface ItemCardProps {
  title: string;
  location: string;
  date: string;
  category: string;
  categoryColor: string;
}

const ItemCard = ({ title, location, date, category, categoryColor }: ItemCardProps) => {
  return (
    <div className="glass-card overflow-hidden group hover:border-primary/50 transition-all cursor-pointer">
      <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
        <div className="text-white/10 group-hover:scale-110 transition-transform duration-500">
           <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${categoryColor}`}>
          {category}
        </div>
      </div>
      <div className="p-6 space-y-2">
        <h4 className="font-bold text-xl">{title}</h4>
        <div className="flex gap-2 text-base text-neutral-50">
           <span>{location}</span>
           <span>|</span>
           <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
