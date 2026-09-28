import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { CourseDiscovery } from "@/components/sections/CourseDiscovery";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <CourseDiscovery />
    </main>
  );
}
