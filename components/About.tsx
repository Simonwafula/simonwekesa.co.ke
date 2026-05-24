import { Section } from "@/components/Section";
import { content } from "@/data/content";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Simon">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative overflow-hidden rounded-lg border border-stone-200 bg-white/60 p-6 shadow-sm">
          <div className="flex items-start gap-5">
            <img
              alt={content.profile.photoAlt}
              className="size-24 shrink-0 rounded border border-stone-200 object-cover grayscale"
              height="96"
              src={content.profile.photo}
              width="96"
            />
            <div>
              <p className="text-sm font-medium text-slate-950">Simon Wekesa</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">Structure, context, and patient analysis.</p>
            </div>
          </div>
          <div className="mt-10 h-28 w-40 border border-[#1E3A5F]/45" aria-hidden="true" />
          <div className="absolute bottom-8 right-8 h-32 w-24 border border-stone-300" aria-hidden="true" />
          <div className="absolute bottom-20 left-20 size-2 rounded-full bg-[#1E3A5F]" aria-hidden="true" />
          <div className="absolute bottom-16 left-10 h-px w-36 bg-stone-300" aria-hidden="true" />
        </div>
        <div className="space-y-5 text-[1.03rem] leading-8 text-slate-600">
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
