"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ReportItemModal from '@/feature/lost-item/components/modal/ReportItemModal';
import { useLostItemStorage } from '@/feature/lost-item/hooks/useLostItemStorage';
import { isAuthenticated } from '@/lib/auth/proxy';
import { useToast } from '@/shared/context/ToastContext';

const Hero = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = useState(false)
  const { addItem } = useLostItemStorage();

  const handleLaporClick = () => {
    if (isAuthenticated()) {
      setOpenModal(true);
    } else {
      showToast('Silakan login terlebih dahulu untuk melapor barang.', 'warning');
      router.push('/login');
    }
  };

  const handleCariClick = (e: React.MouseEvent) => {
    if (!isAuthenticated()) {
      e.preventDefault();
      showToast('Silakan login terlebih dahulu untuk mengakses daftar barang.', 'warning');
      router.push('/login');
    }
  };
  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.3,
        ease: 'power4.out',
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.8,
        ease: 'power4.out',
        delay: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-48 pb-20 px-6 lg:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div ref={textRef} className="max-w-2xl space-y-4">
          <h1 className="text-5xl font-bold leading-tight">
            Temukan barang kamu <br />
            di <span className="text-primary">UniFind</span>
          </h1>
          <p className="text-lg text-white max-w-lg leading-relaxed">
            Laporan barang hilang & temuan kampus yang terpusat, cepat, dan mudah diakses
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            <Link href={"/lost-item"} onClick={handleCariClick}>
              <button className="bg-primary px-8 py-2 rounded-2xl font-bold text-lg hover:opacity-70 transition-all flex items-center shadow-2xl cursor-pointer">
                Cari Barang
              </button>
            </Link>
            <button 
              onClick={handleLaporClick} 
              className="bg-white px-8 py-2 rounded-2xl font-bold text-lg hover:bg-white/60 transition-all text-primary shadow-2xl cursor-pointer">
              Lapor Barang
            </button>
          </div>
        </div>

        <div ref={imageRef} className="absolute w-full lg:w-1/2 md:flex hidden justify-center lg:justify-end right-8">
          <div className="relative w-full max-w-2xl">
            <Image src="/gambar-hero.webp" alt="Hero" width={1000 } height={1000 } className="object-cover" />
          </div>
        </div>
      </div>

      <ReportItemModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={addItem}
      />
    </section>
  );
};

export default Hero;
