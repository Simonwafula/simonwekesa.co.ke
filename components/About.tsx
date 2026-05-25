import { Section } from "@/components/Section";
import { content } from "@/data/content";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Simon">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <div className="relative overflow-hidden rounded-lg border border-stone-200 bg-white/65 shadow-sm">
          <div className="aspect-[4/5] overflow-hidden border-b border-stone-200">
            <img
              alt={content.profile.photoAlt}
              className="size-full object-cover object-[50%_20%] grayscale"
              height="640"
              src={content.profile.photo}
              width="512"
            />
          </div>
          <div className="p-5 sm:p-6">
            <div>
              <p className="text-sm font-medium text-slate-950">Simon Wekesa</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">Structure, context, and patient analysis.</p>
            </div>
            <div className="mt-8 h-20 w-32 border border-[#8A5A32]/45" aria-hidden="true" />
          </div>
          <div className="absolute bottom-8 right-8 h-24 w-20 border border-stone-300" aria-hidden="true" />
          <div className="absolute bottom-20 left-20 size-2 rounded-full bg-[#8A5A32]" aria-hidden="true" />
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
