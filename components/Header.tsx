"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { cn } from "@/lib/utils";
import { SignatureLogo } from "@/components/SignatureLogo";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#FAFAF7] px-5 py-4 supports-[padding:max(0px)]:pt-[max(1rem,env(safe-area-inset-top))] sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a aria-label="Simon Wekesa home" href="#" onClick={closeMenu}>
          <SignatureLogo compact />
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {content.nav.map((item) => (
            <a
              className="text-sm text-slate-600 transition duration-150 hover:text-slate-950"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            className="rounded border border-[#1E3A5F] px-4 py-2 text-sm font-medium text-[#1E3A5F] transition duration-150 hover:bg-[#1E3A5F] hover:text-white"
            href="#contact"
          >
            Contact
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex size-10 items-center justify-center rounded border border-stone-300 text-slate-800 md:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          <span aria-hidden="true" className="relative block size-4">
            <span className={cn("absolute left-0 top-1 block h-px w-4 bg-current transition", open && "translate-y-1.5 rotate-45")} />
            <span className={cn("absolute left-0 top-2.5 block h-px w-4 bg-current transition", open && "-translate-y-0.5 -rotate-45")} />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "mx-auto grid max-w-6xl md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav aria-label="Mobile navigation" className="overflow-hidden">
          <div className="mt-4 border-t border-stone-200 py-4">
            {content.nav.map((item) => (
              <a
                className="block rounded px-2 py-3 text-sm text-slate-700 hover:bg-stone-100"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
