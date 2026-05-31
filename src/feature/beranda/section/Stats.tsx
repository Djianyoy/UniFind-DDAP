"use client"

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsCard = ({ icon, label, count, colorClass }: { icon: React.ReactNode, label: string, count: string, colorClass: string }) => (
  <div className="stat-card glass-card p-8 flex-1 max-w-2xl opacity-0">
    <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <p className="text-muted text-sm font-medium mb-1">{label}</p>
    <h3 className="text-4xl font-bold">{count}</h3>
  </div>
);

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.stat-card', {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-6 lg:px-20 ">
      <div className="flex flex-wrap gap-8">
        <StatsCard 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>}
          label="Barang sekitar"
          count="247"
          colorClass="bg-yellow-400/10"
        />
        <StatsCard 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><polyline points="20 6 9 17 4 12"/></svg>}
          label="Berhasil ditemukan"
          count="183"
          colorClass="bg-green-400/10"
        />
        <StatsCard 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>}
          label="Lokasi terpantau"
          count="18"
          colorClass="bg-red-400/10"
        />
      </div>
    </section>
  );
};

export default Stats;
