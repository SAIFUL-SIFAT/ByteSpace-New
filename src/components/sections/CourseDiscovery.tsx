// src/components/sections/CourseDiscovery.tsx
import Image from "next/image";
import { Star, BarChart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { cn } from "@/lib/cn";
import { courseDiscoveryContent, categories, courses } from "@/data/courses";

export function CourseDiscovery() {
  const { heading, subheading } = courseDiscoveryContent;

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="course-discovery-heading">
      <Container>
        <div className="flex flex-col items-center text-center mx-auto mb-10">
          <h2
            id="course-discovery-heading"
            className="text-heading-m md:text-heading-l text-neutral-950 mb-4"
          >
            {heading.split(", ").map((part, i) => (
              <span key={i} className="block">
                {part}{i === 0 && ","}
              </span>
            ))}
          </h2>
          <p className="text-body-m md:text-body-l text-neutral-500 max-w-3xl">
            {subheading}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-5 py-2.5 rounded-full text-label-s transition-colors",
                category === "Featured"
                  ? "bg-secondary-500 text-neutral-950"
                  : "bg-neutral-50 text-neutral-950 hover:bg-neutral-100 border border-neutral-200"
              )}
            >
              {category}
            </button>
          ))}
          <button className="px-5 py-2.5 rounded-full text-label-s text-primary-600 transition-colors hover:bg-primary-50">
            + More
          </button>
        </div>

        {/* Course Grid */}
        <Grid className="gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col rounded-3xl border border-neutral-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative h-[240px] w-full bg-neutral-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
                
                {/* Overlaid Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-hidden flex-wrap">
                  <div className="flex items-center rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 shadow-sm">
                    <span className="text-body-xs font-medium text-neutral-950">{course.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 shadow-sm">
                    <span className="text-body-xs font-medium text-neutral-950">{course.duration}</span>
                  </div>
                  <div className="flex items-center rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 shadow-sm">
                    <span className="text-body-xs font-medium text-neutral-950">{course.comments} Comments</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col p-6 flex-grow">
                
                {/* Title & Rating */}
                <div className="flex justify-between items-start gap-4 mb-1">
                  <h3 className="text-heading-xs text-neutral-950 line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0 mt-1">
                    <span className="text-label-s text-neutral-500">{course.rating}</span>
                    <Star className="size-4 fill-neutral-300 text-neutral-300" />
                  </div>
                </div>

                {/* Author */}
                <div className="text-body-s text-neutral-500 mb-6">
                  by <span className="text-primary-600 font-medium">{course.author}</span>
                </div>

                {/* Meta Row */}
                <div className="flex justify-between items-center mb-6">
                  {/* Difficulty Pill */}
                  <div className="flex items-center gap-2 rounded-full bg-neutral-50 px-3 py-1.5 border border-neutral-100">
                    <BarChart className="size-3.5 text-neutral-500" />
                    <span className="text-label-xs text-neutral-700">{course.difficulty}</span>
                  </div>
                  
                  {/* Avatars */}
                  <div className="flex items-center">
                    {course.students.map((src, i) => (
                      <div
                        key={i}
                        className={cn(
                          "relative size-7 overflow-hidden rounded-full ring-2 ring-white",
                          i > 0 && "-ml-2"
                        )}
                      >
                        <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                      </div>
                    ))}
                    <div className="relative -ml-2 grid size-7 place-items-center rounded-full bg-secondary-500 ring-2 ring-white z-10">
                      <span className="text-[10px] font-bold text-neutral-950">{course.studentCount}</span>
                    </div>
                  </div>
                </div>

                {/* Footer / Price */}
                <div className="mt-auto pt-4 border-t border-neutral-100">
                  <div className="text-heading-xs text-primary-600">
                    ${course.price}<span className="text-body-m text-neutral-500 font-normal">/lifetime</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
