import { content } from "@/data/content";

function GeometricVisual() {
  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-lg border border-stone-200 bg-white/55 p-8 shadow-sm sm:min-h-[430px]">
      <div className="fine-rectangles absolute inset-x-4 top-8 h-24 opacity-60" aria-hidden="true" />
      <div className="absolute left-10 top-20 h-32 w-48 border border-[#1E3A5F]/55" aria-hidden="true" />
      <div className="absolute right-10 top-14 h-40 w-28 border border-stone-300" aria-hidden="true" />
      <div className="absolute bottom-16 left-16 h-24 w-28 border border-stone-300 bg-[#FAFAF7]" aria-hidden="true" />
      <div className="absolute bottom-10 right-12 h-32 w-44 border border-[#1E3A5F]/45" aria-hidden="true" />
      <div className="absolute left-[34%] top-[46%] h-px w-[34%] bg-stone-300" aria-hidden="true" />
      <div className="absolute left-[52%] top-[30%] h-[42%] w-px bg-stone-300" aria-hidden="true" />
      <div className="absolute left-[31%] top-[44%] size-2 rounded-full bg-[#1E3A5F]" aria-hidden="true" />
      <div className="absolute right-[28%] top-[29%] size-2 rounded-full bg-stone-500" aria-hidden="true" />
      <div className="absolute bottom-[26%] left-[38%] size-1.5 rounded-full bg-stone-400" aria-hidden="true" />
      <div className="absolute right-[21%] top-[58%] size-1.5 rounded-full bg-[#1E3A5F]" aria-hidden="true" />
      <div className="absolute bottom-8 left-8 max-w-[11rem] text-xs leading-5 text-slate-500">
        <span className="block font-medium text-slate-700">Pattern</span>
        <span>Questions, evidence, systems, decisions.</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-6 max-w-xl text-sm font-medium leading-6 text-[#1E3A5F]">{content.hero.descriptor}</p>
          <h1 className="max-w-3xl font-[var(--font-lora)] text-5xl leading-[1.05] text-balance text-slate-950 sm:text-6xl">
            {content.hero.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600">{content.hero.subheadline}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
