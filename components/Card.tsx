import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "group rounded-lg border border-stone-200 bg-white/75 p-5 shadow-sm transition duration-150 ease-out hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white hover:shadow-md sm:p-6",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function MotifIcon({ index }: { index: number }) {
  return (
    <div
      aria-hidden="true"
      className="relative mb-6 flex size-10 items-center justify-center rounded border border-stone-300 bg-stone-50 sm:size-11"
    >
      <span className="absolute left-2 top-2 size-1.5 rounded-full bg-[#1E3A5F]" />
      <span className="absolute bottom-2 right-2 size-1 rounded-full bg-stone-400" />
      <span
        className={cn(
          "block border border-[#1E3A5F]/70",
          index % 3 === 0 && "size-5",
          index % 3 === 1 && "h-4 w-6",
          index % 3 === 2 && "h-6 w-4",
        )}
      />
    </div>
  );
}
