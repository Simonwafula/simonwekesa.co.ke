import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllNotes().map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getAllNotes().find((item) => item.slug === slug);

  if (!note) {
    return {};
  }

  return {
    title: `${note.title} — Simon Wekesa`,
    description: note.excerpt,
    openGraph: {
      title: `${note.title} — Simon Wekesa`,
      description: note.excerpt,
      type: "article",
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const exists = getAllNotes().some((note) => note.slug === slug);

  if (!exists) {
    notFound();
  }

  const note = getNoteBySlug(slug);

  return (
    <>
      <Header />
      <main className="px-5 py-16 sm:px-8 lg:py-24">
        <article className="mx-auto max-w-3xl">
          <a className="text-sm font-medium text-[#8A5A32] hover:text-slate-950" href="/#notes">
            Back to notes
          </a>
          <p className="mt-10 text-sm font-medium text-[#8A5A32]">{note.status}</p>
          <h1 className="mt-4 font-[var(--font-lora)] text-4xl leading-tight text-balance text-slate-950 sm:text-5xl">
            {note.title}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-slate-600">{note.excerpt}</p>
          <div
            className="note-body mt-12 border-t border-stone-200 pt-10 text-slate-700"
            dangerouslySetInnerHTML={{ __html: note.html }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
