import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { cn } from "@/lib/cn";
import { learnerFeatureData, creatorFeatureData } from "@/data/features";

const LimeSquiggle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M75 15 Q20 20 45 45 Q85 50 65 75 Q20 80 45 105 Q85 110 70 125"
      stroke="#d4fb20"
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#0043ff" />
    <path d="M7 12.5L10 15.5L17 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export function FeatureSplit({ type }: { type: "learner" | "creator" }) {
  const isLearner = type === "learner";
  const data = isLearner ? learnerFeatureData : creatorFeatureData;

  const textContent = (
    <div className={cn("flex flex-col justify-center", isLearner ? "lg:pr-10" : "lg:pl-10")}>
      <h2 className="text-heading-m text-neutral-950 mb-6">{data.heading}</h2>
      <p className="text-body-l text-neutral-600 mb-10">{data.body}</p>

      {isLearner && (
        <div className="flex gap-8 md:gap-12">
          {learnerFeatureData.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-heading-s text-primary-600">{stat.value}</span>
              <span className="text-body-m text-neutral-500">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {!isLearner && (
        <ul className="flex flex-col gap-4">
          {creatorFeatureData.checklist.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-body-m text-neutral-800 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageContent = (
    <div className="relative w-full h-[550px] xl:h-[650px] flex items-center justify-center">
      {isLearner ? (
        <>
          {/* Layer 1: Lime Squiggle Background */}
          <div className="absolute top-[10%] right-[10%] w-[160px] h-[200px] -z-10 rotate-12">
            <LimeSquiggle className="w-full h-full object-contain" />
          </div>

          {/* Layer 2: Course Card (Background Left) */}
          <div className="absolute top-[5%] -left-[10%] z-10 w-[373px] h-[384px] flex flex-col rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            {/* Image Section */}
            <div className="relative h-[180px] w-full bg-neutral-100 shrink-0">
              {learnerFeatureData.courseCard.image && (
                <Image src={learnerFeatureData.courseCard.image} alt="Course" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
              )}
              {/* Overlaid Badges */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-hidden flex-wrap">
                <div className="flex items-center rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 shadow-sm">
                  <span className="text-body-xs font-medium text-neutral-950">{learnerFeatureData.courseCard.lessons}</span>
                </div>
                <div className="flex items-center rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 shadow-sm">
                  <span className="text-body-xs font-medium text-neutral-950">{learnerFeatureData.courseCard.duration}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col p-6 flex-grow">
              <h3 className="text-heading-xs text-neutral-950 line-clamp-2 mb-1">
                {learnerFeatureData.courseCard.title}
              </h3>
              <div className="text-body-s text-neutral-500 mb-4">
                {learnerFeatureData.courseCard.subtitle}
              </div>
              
              <div className="flex justify-between items-center mb-4 mt-auto">
                {/* Difficulty Pill */}
                <div className="flex items-center gap-2 rounded-full bg-neutral-50 px-3 py-1.5 border border-neutral-100 w-fit">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                  <span className="text-label-xs text-neutral-700">{learnerFeatureData.courseCard.badge}</span>
                </div>
              </div>

              {/* Footer / Price */}
              <div className="pt-4 border-t border-neutral-100 mt-auto">
                <div className="text-heading-xs text-primary-600">
                  {learnerFeatureData.courseCard.price}<span className="text-body-m text-neutral-500 font-normal">{learnerFeatureData.courseCard.priceSuffix}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Layer 3: Main Avatar Cutout */}
          <div className="relative z-20 w-[380px] h-[480px] xl:w-[480px] xl:h-[580px]">
            <Image src="/hero_avatar.png" alt="Learner" fill sizes="(max-width: 768px) 100vw, 500px" className="object-contain object-bottom drop-shadow-2xl" />
          </div>

          {/* Layer 4: Floating Progress Card (Right) */}
          <div className="absolute top-[25%] right-[5%] z-30 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-5 flex flex-col gap-1 w-[200px]">
            <span className="text-[11px] text-neutral-500 font-medium">{learnerFeatureData.floatingCard.title}</span>
            <span className="text-heading-xs text-neutral-950 font-bold">{learnerFeatureData.floatingCard.value}</span>
            <div className="w-full h-1.5 bg-neutral-100 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-secondary-400 w-[55%] rounded-full" />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Layer 1: Lime Squiggle Background */}
          <div className="absolute top-[40%] right-[5%] w-[180px] h-[220px] -z-10 rotate-12">
            <LimeSquiggle className="w-full h-full object-contain" />
          </div>

          {/* Layer 2: Main Avatar Cutout */}
          <div className="relative z-20 w-[360px] h-[460px] xl:w-[460px] xl:h-[560px]">
            <Image src="/feature-avatar.png" alt="Creator" fill sizes="(max-width: 768px) 100vw, 500px" className="object-contain object-bottom drop-shadow-2xl" />
          </div>

          {/* Layer 1.5: Floating Cards (Behind Avatar) */}
          <div className="absolute top-[15%] left-0 z-10 bg-primary-700 rounded-[16px] shadow-xl p-4 flex flex-col gap-2 w-[232px] h-[119px] justify-center">
            <div className="flex flex-col">
              <span className="text-xs text-primary-50">{creatorFeatureData.floatingCards.revenue.title}</span>
              <span className="text-[10px] text-primary-200">{creatorFeatureData.floatingCards.revenue.date}</span>
            </div>
            <span className="text-heading-xs text-white font-bold leading-none">{creatorFeatureData.floatingCards.revenue.value}</span>
            <div className="w-full h-1.5 bg-white/20 rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-secondary-400 w-[70%] rounded-full" />
            </div>
          </div>

          <div className="absolute bottom-[15%] -left-[5%] z-10 bg-primary-700 rounded-[16px] shadow-xl p-4 flex flex-col gap-2 w-[232px] h-[119px] justify-center">
            <div className="flex flex-col">
              <span className="text-xs text-primary-50">{creatorFeatureData.floatingCards.ytd.title}</span>
              <span className="text-[10px] text-primary-200">{creatorFeatureData.floatingCards.ytd.date}</span>
            </div>
            <span className="text-heading-xs text-white font-bold leading-none">{creatorFeatureData.floatingCards.ytd.value}</span>
            <div className="bg-secondary-400 text-neutral-950 text-[10px] font-bold px-2 py-0.5 rounded-full w-fit mt-1">
              {creatorFeatureData.floatingCards.ytd.badge}
            </div>
          </div>

          <div className="absolute bottom-[10%] right-[10%] z-30 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] px-5 py-4 flex flex-col gap-2 min-w-[200px]">
            <span className="text-[11px] text-neutral-500 font-medium">{creatorFeatureData.floatingCards.students.title}</span>
            <div className="flex items-center gap-1 text-[11px] text-neutral-600 font-bold mb-1">
              {creatorFeatureData.floatingCards.students.rating.split(' ')[0]}
              <span className="text-neutral-400 font-normal">({creatorFeatureData.floatingCards.students.rating.split(' ')[1].replace(/[()]/g, '')})</span>
              <StarIcon />
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-neutral-200 relative overflow-hidden">
                    <Image src={`/hero-avatar-${i}.png`} alt="avatar" fill sizes="40px" className="object-cover" />
                  </div>
                ))}
                <div className="w-7 h-7 rounded-full border-2 border-white bg-secondary-400 flex items-center justify-center relative z-10">
                  <span className="text-[9px] font-bold text-neutral-950">{creatorFeatureData.floatingCards.students.avatarsLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <section className="py-0 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="relative w-full max-w-[1440px] h-full">
          {isLearner ? (
            <>
              <div 
                className="absolute" 
                style={{
                  width: 1137, height: 1137, top: -466, left: -152,
                  background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)'
                }} 
              />
              <div 
                className="absolute" 
                style={{
                  width: 1137, height: 1137, top: -458, left: 811,
                  background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.0184) 53%, rgba(0, 59, 226, 0.0048) 75%, rgba(0, 59, 226, 0) 100%)'
                }} 
              />
            </>
          ) : (
            <>
              <div 
                className="absolute" 
                style={{
                  width: 672, height: 672, top: 146, left: -287,
                  background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)'
                }} 
              />
              <div 
                className="absolute" 
                style={{
                  width: 1137, height: 1137, top: -12, left: 722,
                  background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)'
                }} 
              />
            </>
          )}
        </div>
      </div>

      <Container className="relative z-10">
        <Grid className="items-center gap-y-16">
          {isLearner ? (
            <>
              <div className="col-span-4 md:col-span-8 xl:col-span-6 order-2 xl:order-1">
                {textContent}
              </div>
              <div className="col-span-4 md:col-span-8 xl:col-span-6 order-1 xl:order-2">
                {imageContent}
              </div>
            </>
          ) : (
            <>
              <div className="col-span-4 md:col-span-8 xl:col-span-6">
                {imageContent}
              </div>
              <div className="col-span-4 md:col-span-8 xl:col-span-6">
                {textContent}
              </div>
            </>
          )}
        </Grid>
      </Container>
    </section>
  );
}
