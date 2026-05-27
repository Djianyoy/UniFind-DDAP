"use client"

import React, { useLayoutEffect, useRef } from 'react';
import ItemCard from '../component/ItemCard';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LatestItems = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = [
    { title: "Dompet", location: "Gedung GKM", date: "26 Maret 2026", category: "Hilang", categoryColor: "bg-red-500/20 text-red-300" },
    { title: "Kunci Motor Yamaha", location: "Gedung F Filkom", date: "20 Maret 2026", category: "Ditemukan", categoryColor: "bg-green-500/20 text-green-300" },
    { title: "Hp Iphone 20 Pro Max 2TB", location: "Gedung F Filkom", date: "18 Februari 2026", category: "Dicari", categoryColor: "bg-yellow-500/20 text-yellow-300" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.latest-item-card', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-6 lg:px-20 py-24 space-y-16">
      <h2 className="text-4xl font-bold text-center">Barang Temuan Terbaru</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="latest-item-card">
            <ItemCard {...item} />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 text-muted">
         <div className="flex-1 h-[1px] bg-white/10"></div>
         <Link href="/lost-item" className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
            Temukan lebih banyak 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
         </Link>
         <div className="flex-1 h-[1px] bg-white/10"></div>
      </div>
    </section>
  );
};

export default LatestItems;
