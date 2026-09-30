import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { GridBackground } from "@/components/ui/GridBackground";
import { courses } from "@/data/courses";
import { Star, BarChart } from "lucide-react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

function AuthCourseCard({ course, className }: { course: any; className?: string }) {
  return (
    <div className={cn("bg-white rounded-[24px] overflow-hidden shadow-2xl flex flex-col border border-neutral-100 h-[384px]", className)}>
      <div className="relative h-[180px] w-full bg-neutral-100 shrink-0">
        <Image src={course.image} alt={course.title} fill sizes="373px" className="object-cover" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
          <div className="flex items-center rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 shadow-sm">
            <span className="text-body-xs font-medium text-neutral-950">{course.lessons} Lessons</span>
          </div>
          <div className="flex items-center rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 shadow-sm">
            <span className="text-body-xs font-medium text-neutral-950">{course.duration}</span>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col">
        <div className="flex justify-between items-start gap-4 mb-1">
          <h3 className="text-heading-xs text-neutral-950">{course.title}</h3>
          <div className="flex items-center gap-1 shrink-0 mt-1">
            <span className="text-label-s text-neutral-500">{course.rating}</span>
            <Star className="size-4 fill-secondary-400 text-secondary-400" />
          </div>
        </div>
        <div className="text-body-s text-neutral-500 mb-6">
          by <span className="text-primary-600 font-medium">{course.author}</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 rounded-full bg-neutral-50 px-3 py-1.5 border border-neutral-100">
            <BarChart className="size-3.5 text-neutral-500" />
            <span className="text-label-xs text-neutral-700">{course.difficulty}</span>
          </div>
          <div className="flex items-center">
            {course.students?.map((src: string, index: number) => (
              <div 
                key={index} 
                className="relative -ml-2 first:ml-0 size-7 rounded-full border-2 border-white overflow-hidden bg-neutral-200 z-10"
                style={{ zIndex: 10 + index }}
              >
                <Image src={src} alt="student" fill sizes="28px" className="object-cover" />
              </div>
            ))}
            <div 
              className="relative -ml-2 grid size-7 place-items-center rounded-full bg-neutral-950 ring-2 ring-white text-white"
              style={{ zIndex: 10 + (course.students?.length || 0) }}
            >
              <span className="text-[10px] font-bold">26+</span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-neutral-100">
          <div className="text-heading-xs text-primary-600">
            ${course.price}<span className="text-body-m text-neutral-500 font-normal">/lifetime</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuthLayout({
  children,
  heading,
  description,
}: {
  children: ReactNode;
  heading: string;
  description: string;
}) {
  const topCard = courses[2]; // the Power of Big Data
  const bottomCard = courses[1]; // Build Digital Asset

  return (
    <div className="min-h-screen w-full relative bg-primary-800 overflow-hidden flex">
      {/* Background Grid for the entire page */}
      <GridBackground />
      
      {/* Logo */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 xl:left-24 z-30">
        <Link href="/">
          <Logo variant="light" iconOnly />
        </Link>
      </div>

      <Container className="relative z-20 flex min-h-screen items-center justify-center py-24 w-full">
        <div className="flex w-full flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 xl:gap-24">
          
          {/* Left Side - Illustration & Content */}
          <div className="hidden lg:block w-full max-w-[600px] relative h-[850px]">
            {/* Text Box */}
            <div className="absolute top-[120px] left-0 w-[475px] flex flex-col gap-4 text-white z-10">
              <h1 className="text-heading-xs tracking-[-0.01em] text-white">{heading}</h1>
              <p className="text-body-l text-primary-100">{description}</p>
            </div>

            {/* Bottom Card */}
            <AuthCourseCard 
              course={bottomCard} 
              className="absolute top-[394px] left-0 z-10 w-[373px]" 
            />
            
            {/* Top Card */}
            <AuthCourseCard 
              course={topCard} 
              className="absolute top-[305px] left-[111px] z-20 w-[373px]" 
            />
            
            {/* Happy Students floating card */}
            <div className="absolute top-[600px] left-[320px] z-30 bg-secondary-400 p-4 rounded-2xl w-[220px] shadow-xl">
              <div className="text-body-m font-bold text-neutral-950">Happy Students</div>
              <div className="flex items-center gap-1 text-[11px] text-neutral-950 mb-3">
                4.5 <span className="text-neutral-600">(240)</span> <Star className="size-3 fill-primary-600 text-primary-600" />
              </div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-secondary-400 bg-neutral-200 relative overflow-hidden -ml-2 first:ml-0">
                    <Image src={`/hero-avatar-${i}.png`} alt="avatar" width={28} height={28} className="object-cover w-full h-full" />
                  </div>
                ))}
                <div className="w-7 h-7 rounded-full border-2 border-secondary-400 bg-neutral-950 flex items-center justify-center relative z-10 -ml-2">
                  <span className="text-[9px] font-bold text-white">2K+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Container */}
          <div className="w-full max-w-md bg-white rounded-[32px] p-8 md:p-12 z-30 shrink-0">
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
