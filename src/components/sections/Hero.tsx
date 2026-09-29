// src/components/sections/Hero.tsx  (no "use client" needed)
import Image from "next/image";
import { Search, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { GridBackground } from "@/components/ui/GridBackground";
import { cn } from "@/lib/cn";
import { heroContent, studentAvatars } from "@/data/hero";

export function Hero() {
  const { title, subtitle, searchPlaceholder, category, students, progress } = heroContent;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-[944px] overflow-hidden bg-primary-800"
    >
      {/* Grid lines (cell size is an estimate, confirm in Figma) */}
      <GridBackground />

      {/* Art stage: designed at 1440px, centered, cropped on smaller screens */}
      <div className="absolute inset-y-0 left-1/2 w-[1440px] -translate-x-1/2">
        {/* Lime circle */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[505px] z-10 aspect-square w-[1149px] -translate-x-1/2 rounded-full bg-secondary-500"
        />

        {/* Decorative Squiggles (desktop only) */}
        {/* Left Squiggle */}
        <div className="absolute left-[310px] top-[410px] z-[15] hidden xl:block w-[120px] h-[160px] -rotate-12">
          <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl" aria-hidden="true">
            <path d="M75 15 Q20 20 45 45 Q85 50 65 75 Q20 80 45 105 Q85 110 70 125" stroke="#d4fb20" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Right Squiggle */}
        <div className="absolute left-[1020px] top-[380px] z-[15] hidden xl:block w-[140px] h-[180px] rotate-[15deg]">
          <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl" aria-hidden="true">
            <path d="M75 15 Q20 20 45 45 Q85 50 65 75 Q20 80 45 105 Q85 110 70 125" stroke="#d4fb20" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Bottom Small Squiggle */}
        <div className="absolute left-[780px] top-[780px] z-[15] hidden xl:block w-[90px] h-[120px] -rotate-[30deg]">
          <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl" aria-hidden="true">
            <path d="M75 15 Q20 20 45 45 Q85 50 65 75 Q20 80 45 105 Q85 110 70 125" stroke="#d4fb20" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Person */}
        <Image
          src="/hero_avatar.png"
          alt="Smiling student with headphones holding a laptop"
          width={578}
          height={541} /* set to the real exported size */
          priority
          className="absolute bottom-0 left-1/2 z-20 h-auto w-[320px] -translate-x-1/2 md:w-[578px] xl:left-[431px] xl:translate-x-0"
        />

        {/* Floating cards (desktop only) */}
        <div className="absolute left-[407px] top-[560px] z-30 hidden w-[206px] flex-col gap-1 rounded-xl bg-white p-3 shadow-xl xl:flex">
          <span className="text-label-m text-neutral-950">{category.title}</span>
          <span className="text-body-xs text-neutral-500">{category.meta}</span>
        </div>

        <div className="absolute left-[331px] top-[757px] z-30 hidden w-[256px] flex-col gap-2 rounded-2xl bg-white p-4 shadow-xl xl:flex">
          <span className="text-label-s text-neutral-950">{students.title}</span>
          <span className="flex items-center gap-1 text-body-s text-neutral-500">
            {students.rating} <span>{students.reviews}</span>
            <Star aria-hidden className="size-3.5 fill-secondary-500 text-secondary-500" />
          </span>
          <ul className="flex items-center">
            {studentAvatars.map((src, i) => (
              <li
                key={src}
                className={cn("size-8 overflow-hidden rounded-full ring-2 ring-white", i > 0 && "-ml-2")}
              >
                <Image src={src} alt="" width={32} height={32} className="h-full w-full object-cover" />
              </li>
            ))}
            <li className="-ml-2 grid size-8 place-items-center rounded-full bg-secondary-500 text-label-xs text-neutral-950 ring-2 ring-white">
              {students.extra}
            </li>
          </ul>
        </div>

        <div className="absolute left-[843px] top-[570px] z-30 hidden h-[131px] w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 shadow-xl xl:flex">
          <span className="text-label-s text-neutral-950">{progress.title}</span>
          <span className="text-heading-m leading-none text-neutral-950">{progress.value}%</span>
          <div className="mt-auto h-2 w-full overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-secondary-500"
              style={{ width: `${progress.value}%` }} /* dynamic value */
            />
          </div>
        </div>
      </div>

      {/* Text and search */}
      <Container className="relative z-40 flex flex-col items-center pt-[88px] text-center">
        <h1 id="hero-heading" className="text-heading-s text-white md:text-heading-m xl:text-heading-l">
          {title[0]}
          <br />
          {title[1]}
        </h1>
        <p className="mt-8 max-w-[860px] text-body-l text-primary-50">{subtitle}</p>

        <form role="search" className="mt-14 flex w-full max-w-[580px] items-center gap-4">
          <div className="relative flex-1">
            <Search
              aria-hidden
              className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-400"
            />
            <Input
              type="search"
              aria-label="Search courses"
              placeholder={searchPlaceholder}
              className="border-0 pl-12"
            />
          </div>
          <Button type="submit" className="h-12 px-6">
            Search
          </Button>
        </form>
      </Container>
    </section>
  );
}