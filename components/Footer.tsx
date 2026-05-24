import { content } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold text-slate-950">Simon Wekesa</p>
          <p className="mt-2 text-sm text-slate-600">Quiet work on complex problems.</p>
          <p className="mt-5 max-w-xl text-xs leading-6 text-slate-500">
            Views expressed here are personal and do not represent any institution I am affiliated with.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
          {content.nav.map((item) => (
            <a className="hover:text-slate-950" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
