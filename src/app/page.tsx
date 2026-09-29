import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { CourseDiscovery } from "@/components/sections/CourseDiscovery";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { FeatureSplit } from "@/components/sections/FeatureSplit";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <CourseDiscovery />
      <LearningPaths />
      <FeatureSplit type="learner" />
      <FeatureSplit type="creator" />
    </main>
  );
}
