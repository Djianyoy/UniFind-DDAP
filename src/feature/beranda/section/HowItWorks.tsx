"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StepCard = ({ number, title, description, imgSrc }: { number: string, title: string, description: string, imgSrc?: string  }) => {
  const [image, setImage] = React.useState(imgSrc || "FALLBACK_IMAGE");

  return (
  <div className="step-card glass-card overflow-hidden opacity-0">
    <div className="aspect-video bg-white/5 relative flex items-center justify-center p-4">
       <Image 
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        onError={() => setImage("FALLBACK_IMAGE")}
        />

    </div>
    <div className="p-8 space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <p className="text-muted text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
  )
};

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.step-card', {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      })
      
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.8,
        ease: 'power4.out',
      });;
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-6 lg:px-20 py-24 space-y-16">
      <div ref={textRef} className="space-y-4 text-center">
        <h2 className="text-5xl font-bold">Bagaimana Cara Kerjanya?</h2>
      </div>

      <div className="w-full flex items-center gap-4 p-4 w-fit mx-auto rounded-2xl mb-12">
         <Link href={"/cari"} className="p-3 rounded-xl glass">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
         </Link>
         <span className="font-bold text-4xl pr-4">Kehilangan Barang</span>
      </div>
      
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StepCard 
          number="1"
          title="Cari & Klaim (Wajib Login)"
          description="Cari barangmu di daftar. Jika sudah ada yang menemukan, kamu wajib login untuk mengajukan permintaan klaim."
          imgSrc='/step-1.png'
        />
        <StepCard 
          number="2"
          title="Lapor Kehilangan"
          description="Barang belum ada di daftar? Jangan panik. Login dan isi 'Form Kehilangan'. Laporanmu akan terbit dengan status 'Dicari' agar dibantu oleh mahasiswa lain."          imgSrc='/step-2.png'
        />
        <StepCard 
          number="3"
          title="Notifikasi & Bertemu"
          description="Sistem akan memberitahumu jika ada match (kecocokan) atau info yang mengarah ke barangmu. Janjian di Kampus dan ambil barangmu!"
          imgSrc='/step-3.png'
        />
      </div>

      <div className="flex justify-center gap-4 pt-8">
         <button className="p-3 glass rounded-full hover:bg-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
         </button>
         <button className="p-3 glass rounded-full hover:bg-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
         </button>
      </div>
    </section>
  );
};

export default HowItWorks;
