import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { content } from "@/data/content";

export function Ventures() {
  return (
    <Section id="ventures" eyebrow="Ventures" title="Ventures and experiments">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <div className="space-y-5 text-[1.03rem] leading-8 text-slate-600">
            {content.ventures.body.map((paragraph) => (
              <p className="text-pretty" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <a
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded border border-[#8A5A32] px-4 py-3 text-sm font-medium text-[#8A5A32] transition duration-150 hover:bg-[#8A5A32] hover:text-white"
            href={content.contact.mstatili}
            rel="noreferrer"
            target="_blank"
          >
            Visit Mstatili
          </a>
        </Card>
        <Card className="bg-[#FAFAF7]">
          <p className="text-xs font-medium uppercase text-[#8A5A32]">Concept</p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-950">Sonko</h3>
          <p className="mt-4 text-pretty text-sm leading-7 text-slate-600">{content.ventures.sonko}</p>
        </Card>
      </div>
    </Section>
  );
}
