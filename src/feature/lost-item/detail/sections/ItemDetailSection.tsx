"use client";

import { useParams } from "next/navigation";

import DetailBackground from "../components/DetailBackground";
import DetailBackButton from "../components/DetailBackButton";
import DetailDescription from "../components/DetailDescription";
import DetailHero from "../components/DetailHero";
import DetailInfoCard from "../components/DetailInfoCard";

import { useItemDetail } from "../hooks/useItemDetail";

export default function DetailItemSection() {
  const params = useParams();

  const id = params.id as string;

  const item = useItemDetail(id);

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#1B2559] text-white">
        Item tidak ditemukan
      </div>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1B2559]">
      <DetailBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        <DetailBackButton />

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
          
          {/* LEFT */}
          <div className="flex flex-1 flex-col gap-5">
            <DetailHero item={item} />

            <DetailDescription
              description={item.description}
            />
          </div>

          {/* RIGHT */}
          <div className="w-full lg:max-w-[420px] xl:max-w-[460px]">
            <DetailInfoCard item={item} />
          </div>

        </div>
      </div>
    </section>
  );
}