import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { learningPathsContent, learningPaths } from "@/data/learning-paths";

export function LearningPaths() {
  const { heading, subheading } = learningPathsContent;

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="learning-paths-heading">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mx-auto mb-16 w-full">
          <h2
            id="learning-paths-heading"
            className="text-heading-m text-neutral-950 mb-6"
          >
            {heading}
          </h2>
          <p className="text-body-m md:text-body-l text-neutral-500 max-w-[1024px]">
            {subheading}
          </p>
        </div>

        {/* Categories Grid */}
        <Grid className="grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {learningPaths.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.id}
                className="flex flex-col items-center justify-center py-10 px-4 rounded-2xl border border-neutral-200 bg-white hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-500 mb-6 text-neutral-950">
                  <Icon className="h-8 w-8 stroke-[2px]" />
                </div>
                <span className="text-label-m text-neutral-950 text-center">
                  {path.title}
                </span>
              </div>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}
