import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, eyebrow, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("section-anchor px-5 py-16 sm:px-8 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          {eyebrow ? (
            <p className="mb-3 text-sm font-medium text-[#1E3A5F]">{eyebrow}</p>
          ) : null}
          <h2 className="font-[var(--font-lora)] text-3xl leading-tight text-balance text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {intro ? <p className="mt-5 text-pretty text-[0.98rem] leading-7 text-slate-600">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
