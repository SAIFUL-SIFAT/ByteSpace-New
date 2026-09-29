import { cn } from "@/lib/cn";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.15)_2px,transparent_2px),linear-gradient(to_bottom,rgb(255_255_255/0.15)_2px,transparent_2px)] bg-[size:180px_180px]",
        className
      )}
    />
  );
}
