import { Suspense } from "react";
import { Section } from "@/components/Section";
import { ContactStatus } from "@/components/ContactStatus";
import { content } from "@/data/content";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s connect" intro={content.contact.body} className="bg-white/35">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
        <div className="rounded-lg border border-stone-200 bg-white/75 p-5 shadow-sm sm:p-6">
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="font-medium text-slate-950">Email</dt>
              <dd className="mt-1 text-slate-600">
                <a className="transition duration-150 hover:text-[#1E3A5F]" href={`mailto:${content.contact.email}`}>
                  {content.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-950">LinkedIn</dt>
              <dd className="mt-1 text-slate-600">
                <a className="break-words transition duration-150 hover:text-[#1E3A5F]" href={content.contact.linkedin} rel="noreferrer" target="_blank">
                  LinkedIn profile
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-950">GitHub</dt>
              <dd className="mt-1 text-slate-600">
                <a className="break-words transition duration-150 hover:text-[#1E3A5F]" href={content.contact.github} rel="noreferrer" target="_blank">
                  GitHub profile
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-950">Mstatili</dt>
              <dd className="mt-1 text-slate-600">
                <a className="break-words transition duration-150 hover:text-[#1E3A5F]" href={content.contact.mstatili} rel="noreferrer" target="_blank">
                  Mstatili Technologies
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form action="/contact.php" className="rounded-lg border border-stone-200 bg-white/75 p-5 shadow-sm sm:p-6" method="post">
          <Suspense fallback={null}>
            <ContactStatus />
          </Suspense>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Send a short note, question, or invitation to collaborate.
          </p>
          <input name="subject" type="hidden" value="Website message from simonwekesa.co.ke" />
          <label className="sr-only" htmlFor="website">
            Website
          </label>
          <input
            autoComplete="off"
            className="hidden"
            id="website"
            name="website"
            tabIndex={-1}
            type="text"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-800">
              Name
              <input
                className="mt-2 min-h-11 w-full rounded border border-stone-300 bg-white px-3 text-slate-900 outline-none transition duration-150 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/15"
                name="name"
                required
                type="text"
              />
            </label>
            <label className="block text-sm font-medium text-slate-800">
              Email
              <input
                className="mt-2 min-h-11 w-full rounded border border-stone-300 bg-white px-3 text-slate-900 outline-none transition duration-150 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/15"
                name="email"
                required
                type="email"
              />
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium text-slate-800">
            Message
            <textarea
              className="mt-2 min-h-36 w-full resize-y rounded border border-stone-300 bg-white px-3 py-3 text-slate-900 outline-none transition duration-150 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/15"
              name="message"
              required
            />
          </label>
          <button
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded bg-[#1E3A5F] px-5 py-3 text-sm font-medium text-white transition duration-150 hover:bg-slate-800 sm:w-auto"
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
