import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { CourseDiscovery } from "@/components/sections/CourseDiscovery";
import { LearningPaths } from "@/components/sections/LearningPaths";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <CourseDiscovery />
      <LearningPaths />
    </main>
  );
}
