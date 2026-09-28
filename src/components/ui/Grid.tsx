import { cn } from "@/lib/cn";

export function Grid({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "grid grid-cols-4 gap-x-5 md:grid-cols-8 md:gap-x-8 xl:grid-cols-12 xl:gap-x-10",
        className
      )}
      {...props}
    />
  );
}
