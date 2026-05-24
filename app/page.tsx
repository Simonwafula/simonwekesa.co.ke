import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Notes } from "@/components/Notes";
import { Section } from "@/components/Section";
import { SelectedWork } from "@/components/SelectedWork";
import { Ventures } from "@/components/Ventures";
import { WorkAreas } from "@/components/WorkAreas";
import { content } from "@/data/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="positioning" eyebrow="Positioning" title={content.positioning.title}>
          <div className="mx-auto max-w-3xl space-y-5 text-[1.03rem] leading-8 text-slate-600">
            {content.positioning.body.map((paragraph) => (
              <p className="text-pretty" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </Section>
        <WorkAreas />
        <SelectedWork />
        <About />
        <Credentials />
        <Notes />
        <Ventures />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
