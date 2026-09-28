import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main>
      <Container className="py-20 text-center space-y-4">
        <h1 className="text-heading-m text-primary-500">Foundation Ready</h1>
        <p className="text-body-m text-neutral-600">The Next.js boilerplate has been cleared.</p>
      </Container>
    </main>
  );
}
