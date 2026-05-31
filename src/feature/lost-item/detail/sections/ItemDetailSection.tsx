"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { gsap } from "gsap";

import DetailBackground from "@/feature/lost-item/detail/components/DetailBackground";
import DetailBackButton from "@/feature/lost-item/detail/components/DetailBackButton";
import DetailDescription from "@/feature/lost-item/detail/components/DetailDescription";
import DetailHero from "@/feature/lost-item/detail/components/DetailHero";
import DetailInfoCard from "@/feature/lost-item/detail/components/DetailInfoCard";

import { useItemDetail } from "@/feature/lost-item/detail/hooks/useItemDetail";
import ClaimModal from "@/feature/lost-item/claim/components/ClaimModal";

export default function DetailItemSection() {
  const params = useParams();
  const [isClaimOpen, setIsClaimOpen] = useState(false);
  const router = useRouter();

  const [refreshKey, setRefreshKey] = useState(0);

  const id = params.id as string;

  const item = useItemDetail(id, refreshKey);

  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const backBtnRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);

  // Mount-only entrance animations
  useLayoutEffect(() => {
    if (!item) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Back button fades in from left
      if (backBtnRef.current) {
        tl.fromTo(
          backBtnRef.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 }
        );
      }

      // Hero image scales up with fade
      if (heroRef.current) {
        tl.fromTo(
          heroRef.current,
          { y: 40, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9 },
          "-=0.3"
        );
      }

      // Description fades up
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        );
      }

      // Info card slides in from the right
      if (infoCardRef.current) {
        tl.fromTo(
          infoCardRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        );
      }

      // Background blobs: gentle floating
      gsap.to(".detail-bg-blob", {
        y: 20,
        x: 10,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [item]);

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#1B2559] text-white">
        Item tidak ditemukan
      </div>
    );
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#1B2559]">
      <DetailBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        <div ref={backBtnRef}>
          <DetailBackButton />
        </div>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex flex-1 flex-col gap-5">
            <div ref={heroRef}>
              <DetailHero item={item} />
            </div>

            <div ref={descRef}>
              <DetailDescription description={item.description} />
            </div>
          </div>

          <div ref={infoCardRef} className="w-full lg:max-w-[420px] xl:max-w-[460px]">
            <DetailInfoCard
              item={item}
              onClaimClick={() => setIsClaimOpen(true)}
            />
          </div>
        </div>
      </div>
      <ClaimModal
        isOpen={isClaimOpen}
        itemId={item.id}
        onClose={() => setIsClaimOpen(false)}
        onSuccess={() => {
          setRefreshKey((prev) => prev + 1);

          setIsClaimOpen(false);

          router.push("/lost-item");
        }}
      />
    </section>
  );
}
