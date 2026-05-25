import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const notesDirectory = path.join(process.cwd(), "content", "notes");

export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  status: string;
  order: number;
  html: string;
};

type Frontmatter = {
  title?: string;
  excerpt?: string;
  date?: string;
  status?: string;
  order?: number;
};

function getMarkdownFiles() {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  return fs.readdirSync(notesDirectory).filter((file) => file.endsWith(".md"));
}

export function getAllNotes(): Note[] {
  return getMarkdownFiles()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      return getNoteBySlug(slug);
    })
    .sort((a, b) => a.order - b.order || b.date.localeCompare(a.date));
}

export function getNoteBySlug(slug: string): Note {
  const fullPath = path.join(notesDirectory, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);
  const frontmatter = data as Frontmatter;

  return {
    slug,
    title: frontmatter.title ?? slug,
    excerpt: frontmatter.excerpt ?? "",
    date: frontmatter.date ?? "",
    status: frontmatter.status ?? "Draft",
    order: frontmatter.order ?? 999,
    html: marked.parse(content, { async: false }) as string,
  };
}
