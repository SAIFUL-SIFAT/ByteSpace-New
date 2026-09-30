import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { testimonialData } from "@/data/testimonial";

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="relative w-full max-w-[1440px] h-full">
          <div 
            className="absolute" 
            style={{
              width: 1137, height: 1137, top: 149, left: -442,
              background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)'
            }} 
          />
          <div 
            className="absolute" 
            style={{
              width: 672, height: 672, top: -138, left: 395,
              background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)'
            }} 
          />
          <div 
            className="absolute" 
            style={{
              width: 1137, height: 1137, top: -241, left: 842,
              background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)'
            }} 
          />
        </div>
      </div>

      <Container className="relative z-10">
        <Grid className="mb-16 gap-y-8">
          <div className="col-span-4 md:col-span-8 xl:col-span-5">
            <h2 className="text-heading-m text-neutral-950">
              {testimonialData.heading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <div className="col-span-4 md:col-span-8 xl:col-span-6 xl:col-start-7 flex items-center">
            <p className="text-body-l text-neutral-600">
              {testimonialData.description}
            </p>
          </div>
        </Grid>

        <Grid className="gap-y-8">
          {testimonialData.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-span-4 md:col-span-4 xl:col-span-4 flex">
              <div className="bg-white rounded-3xl p-8 flex flex-col w-full shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-neutral-100">
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden relative mb-6 shrink-0 bg-neutral-100">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={72} height={72} className="object-cover w-full h-full" />
                </div>
                <div className="mb-6">
                  <h3 className="text-heading-xs text-neutral-950 mb-1">{testimonial.name}</h3>
                  <div className="text-body-m text-primary-600">{testimonial.role}</div>
                </div>
                <p className="text-body-m text-neutral-600 mt-auto">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
