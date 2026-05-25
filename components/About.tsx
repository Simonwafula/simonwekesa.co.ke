import { Section } from "@/components/Section";
import { content } from "@/data/content";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Simon">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <div className="relative overflow-hidden rounded-lg border border-stone-200 bg-white/65 p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-5">
            <img
              alt={content.profile.photoAlt}
              className="size-20 shrink-0 rounded border border-stone-200 object-cover grayscale sm:size-24"
              height="96"
              src={content.profile.photo}
              width="96"
            />
            <div>
              <p className="text-sm font-medium text-slate-950">Simon Wekesa</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">Structure, context, and patient analysis.</p>
            </div>
          </div>
          <div className="mt-10 h-24 w-36 border border-[#1E3A5F]/45 sm:h-28 sm:w-40" aria-hidden="true" />
          <div className="absolute bottom-8 right-8 h-28 w-20 border border-stone-300 sm:h-32 sm:w-24" aria-hidden="true" />
          <div className="absolute bottom-20 left-20 size-2 rounded-full bg-[#1E3A5F]" aria-hidden="true" />
          <div className="absolute bottom-16 left-10 h-px w-32 bg-stone-300 sm:w-36" aria-hidden="true" />
        </div>
        <div className="space-y-5 text-[1rem] leading-8 text-slate-600 sm:text-[1.03rem]">
          {content.about.map((paragraph) => (
            <p className="text-pretty" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
