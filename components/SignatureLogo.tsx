import { cn } from "@/lib/utils";

type SignatureLogoProps = {
  className?: string;
  compact?: boolean;
};

export function SignatureLogo({ className, compact = false }: SignatureLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <svg
        aria-label="Simon Wekesa"
        className={cn("h-[74px] w-[320px]", compact && "h-9 w-[170px] sm:h-10 sm:w-[196px]")}
        fill="none"
        role="img"
        viewBox={compact ? "0 0 280 64" : "0 0 420 96"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={compact ? "translate(1 8) scale(.64)" : "translate(2 10)"}>
          <rect fill="#142235" height="72" rx="2" width="72" />
          <rect height="48" rx="1" stroke="#F7F5F0" strokeWidth="2.4" width="48" x="12" y="12" />
          <rect height="36" rx="1" stroke="#F7F5F0" strokeOpacity="0.82" strokeWidth="2" width="36" x="18" y="18" />
          <path
            d="M25 31c3.4-6.2 18.6-6.4 22.4-.7 3.1 4.8-1.1 9.3-8.8 9.3H30c-4.9 0-6.7 4.5-2.7 7.5 4.8 3.7 15.2 2.4 19-2.7"
            stroke="#F7F5F0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M21 31l12.5 25L42 38l9.5 18L62 20"
            stroke="#F7F5F0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <rect height="60" rx="1" stroke="#8A5A32" strokeOpacity="0.55" width="60" x="6" y="6" />
        </g>

        <g transform={compact ? "translate(58 7)" : "translate(94 8)"}>
          <text
            fill="#142235"
            fontFamily='"Snell Roundhand", "Segoe Script", "Brush Script MT", "Bradley Hand", cursive'
            fontSize={compact ? "38" : "58"}
            fontStyle="italic"
            fontWeight="500"
            x="0"
            y={compact ? "36" : "54"}
          >
            Simon Wekesa
          </text>
          <path
            d={compact ? "M5 44C61 39 126 39 202 43" : "M8 65C86 58 184 58 302 64"}
            stroke="#8A5A32"
            strokeLinecap="round"
            strokeOpacity="0.9"
            strokeWidth={compact ? "1.6" : "2.2"}
          />
          {!compact ? (
            <text
              fill="#142235"
              fontFamily='Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
              fontSize="14"
              fontWeight="650"
              x="4"
              y="88"
            >
              DATA · PUBLIC SYSTEMS · DECISION-MAKING
            </text>
          ) : null}
        </g>
      </svg>
    </span>
  );
}
