import { cn } from "@/lib/cn";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-[120px]",
        className
      )}
      {...props}
    />
  );
}
