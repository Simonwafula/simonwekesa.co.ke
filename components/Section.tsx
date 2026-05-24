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
    <section id={id} className={cn("section-anchor px-5 py-20 sm:px-8 lg:py-28", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-3 text-sm font-medium text-[#1E3A5F]">{eyebrow}</p>
          ) : null}
          <h2 className="font-[var(--font-lora)] text-3xl leading-tight text-balance text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {intro ? <p className="mt-5 text-pretty text-base leading-7 text-slate-600">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
