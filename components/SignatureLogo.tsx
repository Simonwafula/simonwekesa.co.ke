import { cn } from "@/lib/utils";

type SignatureLogoProps = {
  className?: string;
  compact?: boolean;
};

export function SignatureLogo({ className, compact = false }: SignatureLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <svg
        aria-labelledby="signature-logo-title"
        className={cn("h-10 w-[176px]", compact && "h-9 w-[158px]")}
        fill="none"
        role="img"
        viewBox="0 0 220 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="signature-logo-title">Simon Wekesa</title>
        <rect height="32" rx="2" stroke="#D8D5CB" width="32" x="2" y="10" />
        <rect height="13" stroke="#1E3A5F" strokeOpacity="0.72" width="16" x="7" y="15" />
        <rect height="14" stroke="#9CA3AF" width="15" x="15" y="23" />
        <path
          d="M49 34c7-15 15-24 22-24 4 0 5 4 2 9-4 7-12 10-17 6-3-2-3-6 0-9 5-5 15 0 16 10 1 8-5 14-13 14-4 0-8-2-10-6Zm39-2c4-10 7-15 10-15 2 0 2 3 0 8-2 5-4 9-2 9 3 0 8-9 12-17m-1 17c5-13 10-19 16-18 4 1 4 6 0 13-4 6-9 8-12 5-4-4 4-16 13-17 8-1 9 9 2 17m18-18c-3 8-5 14-2 17 3 3 9-5 14-17m5 0c-6 16-3 22 7 16 5-3 9-9 11-14m-2 14c7-17 15-24 24-22"
          stroke="#1F2933"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.1"
        />
        <path
          d="M47 42c34 5 83 4 142-2"
          stroke="#1E3A5F"
          strokeLinecap="round"
          strokeOpacity="0.62"
          strokeWidth="1.6"
        />
      </svg>
    </span>
  );
}
