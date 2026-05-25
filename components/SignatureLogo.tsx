import { cn } from "@/lib/utils";

type SignatureLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
};

export function SignatureLogo({ className, markClassName, textClassName }: SignatureLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "relative flex size-8 shrink-0 items-center justify-center rounded border border-stone-300 bg-white/75 text-[0.72rem] font-semibold text-[#1E3A5F] shadow-sm",
          markClassName,
        )}
      >
        <span className="absolute left-1.5 top-1.5 size-2.5 border border-[#1E3A5F]/45" />
        <span className="absolute bottom-1.5 right-1.5 size-3 border border-stone-300" />
        SW
      </span>
      <span className={cn("signature-wordmark text-slate-950", textClassName)}>Simon Wekesa</span>
    </span>
  );
}
