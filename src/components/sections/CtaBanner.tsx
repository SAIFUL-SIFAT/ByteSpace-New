import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/ui/GridBackground";
import { ctaBannerContent } from "@/data/cta-banner";
import Link from "next/link";

export function CtaBanner() {
  const { heading, body, buttonText, buttonLink } = ctaBannerContent;

  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-primary-800 py-24">
      <GridBackground />
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <h2 id="cta-heading" className="text-heading-s md:text-heading-m text-white">
            {heading}
          </h2>
          <p className="mt-6 text-body-m text-primary-50">
            {body}
          </p>
          <div className="mt-10">
            <Button asChild>
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
