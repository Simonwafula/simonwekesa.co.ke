import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { content } from "@/data/content";

export function SelectedWork() {
  return (
    <Section
      id="selected-work"
      eyebrow="Selected Work"
      title="Selected work and interests"
      intro={content.selectedWork.intro}
      className="bg-white/35"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {content.selectedWork.items.map((item) => (
          <Card className="min-h-56" key={item.title}>
            <p className="text-xs font-medium uppercase text-[#1E3A5F]">{item.type}</p>
            <h3 className="mt-4 text-xl font-semibold text-balance text-slate-950">{item.title}</h3>
            <p className="mt-4 text-pretty text-sm leading-7 text-slate-600">{item.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
