import { Card, MotifIcon } from "@/components/Card";
import { Section } from "@/components/Section";
import { content } from "@/data/content";

export function Credentials() {
  return (
    <Section
      id="credentials"
      eyebrow="Credentials"
      title="Selected learning and credentials"
      intro={content.credentials.intro}
      className="bg-white/35"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.credentials.items.map((item, index) => (
          <Card key={item.title}>
            <MotifIcon index={index} />
            <p className="text-xs font-medium uppercase text-[#8A5A32]">{item.issuer}</p>
            <h3 className="mt-4 text-lg font-semibold leading-snug text-balance text-slate-950">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{item.date}</p>
            <p className="mt-4 text-pretty text-sm leading-7 text-slate-600">{item.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
