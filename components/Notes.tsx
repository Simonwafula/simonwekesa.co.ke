import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { content } from "@/data/content";
import { getAllNotes } from "@/lib/notes";

export function Notes() {
  const notes = getAllNotes();

  return (
    <Section id="notes" eyebrow="Notes" title="Field notes" intro={content.notes.intro} className="bg-white/35">
      <div className="grid gap-5 md:grid-cols-2">
        {notes.map((note) => (
          <Card key={note.slug}>
            <span className="inline-flex rounded border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-slate-500">
              {note.status}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-balance text-slate-950">{note.title}</h3>
            <p className="mt-3 text-pretty text-sm leading-7 text-slate-600">{note.excerpt}</p>
            <a
              className="mt-6 inline-flex text-sm font-medium text-[#1E3A5F] transition duration-150 hover:text-slate-950"
              href={`/notes/${note.slug}`}
            >
              Read note
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}
