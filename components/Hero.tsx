import { content } from "@/data/content";

function PortraitVisual() {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-stone-200 bg-white/55 shadow-sm sm:min-h-[420px] lg:min-h-[500px]">
      <img
        alt={content.media.heroPhotoAlt}
        className="absolute inset-0 size-full object-cover object-[35%_center]"
        src={content.media.heroPhoto}
      />
      <div className="absolute inset-0 bg-[#142235]/[0.03]" aria-hidden="true" />
      <div className="absolute right-7 top-7 h-28 w-24 border border-[#8A5A32]/55 sm:h-36 sm:w-28" aria-hidden="true" />
      <div className="absolute bottom-7 left-7 h-24 w-32 border border-white/65 bg-white/10" aria-hidden="true" />
      <div className="absolute bottom-12 right-12 h-px w-28 bg-white/65" aria-hidden="true" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
        <div>
          <p className="mb-5 max-w-xl text-sm font-medium leading-6 text-[#8A5A32]">{content.hero.descriptor}</p>
          <h1 className="max-w-3xl font-[var(--font-lora)] text-4xl leading-[1.08] text-balance text-slate-950 sm:text-5xl lg:text-6xl">
            {content.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">{content.hero.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-11 items-center justify-center rounded bg-[#8A5A32] px-5 py-3 text-sm font-medium text-white transition duration-150 hover:bg-[#6F4426]"
              href="#work"
            >
              View Work
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded border border-stone-300 bg-white/70 px-5 py-3 text-sm font-medium text-slate-800 transition duration-150 hover:border-slate-400 hover:bg-white"
              href="#notes"
            >
              Read Notes
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded px-5 py-3 text-sm font-medium text-slate-700 transition duration-150 hover:text-slate-950"
              href="#contact"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <PortraitVisual />
      </div>
    </section>
  );
}
