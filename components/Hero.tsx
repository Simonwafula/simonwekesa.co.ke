import { content } from "@/data/content";

function GeometricVisual() {
  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-stone-200 bg-white/55 p-6 shadow-sm sm:min-h-[380px] sm:p-8 lg:min-h-[420px]">
      <div className="fine-rectangles absolute inset-x-4 top-8 h-24 opacity-60" aria-hidden="true" />
      <div className="absolute left-8 top-20 h-28 w-40 border border-[#1E3A5F]/55 sm:left-10 sm:h-32 sm:w-48" aria-hidden="true" />
      <div className="absolute right-8 top-14 h-36 w-24 border border-stone-300 sm:right-10 sm:h-40 sm:w-28" aria-hidden="true" />
      <div className="absolute bottom-14 left-12 h-20 w-24 border border-stone-300 bg-[#FAFAF7] sm:bottom-16 sm:left-16 sm:h-24 sm:w-28" aria-hidden="true" />
      <div className="absolute bottom-10 right-8 h-28 w-36 border border-[#1E3A5F]/45 sm:right-12 sm:h-32 sm:w-44" aria-hidden="true" />
      <div className="absolute left-[34%] top-[46%] h-px w-[34%] bg-stone-300" aria-hidden="true" />
      <div className="absolute left-[52%] top-[30%] h-[42%] w-px bg-stone-300" aria-hidden="true" />
      <div className="absolute left-[31%] top-[44%] size-2 rounded-full bg-[#1E3A5F]" aria-hidden="true" />
      <div className="absolute right-[28%] top-[29%] size-2 rounded-full bg-stone-500" aria-hidden="true" />
      <div className="absolute bottom-[26%] left-[38%] size-1.5 rounded-full bg-stone-400" aria-hidden="true" />
      <div className="absolute right-[21%] top-[58%] size-1.5 rounded-full bg-[#1E3A5F]" aria-hidden="true" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
        <div>
          <p className="mb-5 max-w-xl text-sm font-medium leading-6 text-[#1E3A5F]">{content.hero.descriptor}</p>
          <h1 className="max-w-3xl font-[var(--font-lora)] text-4xl leading-[1.08] text-balance text-slate-950 sm:text-5xl lg:text-6xl">
            {content.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">{content.hero.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-11 items-center justify-center rounded bg-[#1E3A5F] px-5 py-3 text-sm font-medium text-white transition duration-150 hover:bg-slate-800"
              href="#work"
            >
              View Work
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded border border-stone-300 bg-white/70 px-5 py-3 text-sm font-medium text-slate-800 transition duration-150 hover:border-slate-400 hover:bg-white"
              href="#contact"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <GeometricVisual />
      </div>
    </section>
  );
}
