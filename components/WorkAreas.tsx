import { Card, MotifIcon } from "@/components/Card";
import { Section } from "@/components/Section";
import { content } from "@/data/content";

export function WorkAreas() {
  return (
    <Section id="work" eyebrow="Work Areas" title="The problems I help clarify">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.workAreas.map((item, index) => (
          <Card key={item.title}>
            <MotifIcon index={index} />
            <h3 className="text-lg font-semibold text-balance text-slate-950">{item.title}</h3>
            <p className="mt-3 text-pretty text-sm leading-7 text-slate-600">{item.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
