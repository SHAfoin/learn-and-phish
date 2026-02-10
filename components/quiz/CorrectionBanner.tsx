import React from "react";

type Props = {
  isCorrect: boolean;
  correctionText: string;
  className?: string;
};

export default function CorrectionBanner({
  isCorrect,
  correctionText,
  className,
}: Props) {
  const stroke = isCorrect
    ? "var(--color-quiz-easy)"
    : "var(--color-quiz-hard)";

  const title = isCorrect ? "Bien joué" : "Pas tout à fait";

  return (
    <div
      className={[
        "w-full rounded-[10px] border p-4 flex gap-3 items-start",
        "bg-[var(--color-ocean-950)]",
        className ?? "",
      ].join(" ")}
      style={{ borderColor: stroke }}
    >
      {/* Icon */}
      <div className="shrink-0 mt-[2px]">
        {isCorrect ? (
          <svg width="24" height="24" viewBox="0 0 34 34" fill="none">
            <circle cx="17" cy="17" r="15" stroke={stroke} strokeWidth="2" />
            <path
              d="M10 17.5L14.5 22L24 12.5"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 34 34" fill="none">
            <circle cx="17" cy="17" r="15" stroke={stroke} strokeWidth="2" />
            <path
              d="M12 12L22 22"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M22 12L12 22"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <div
          className="text-sm font-medium"
          style={{ color: stroke }}
        >
          {title}
        </div>

        <div className="text-sm text-white/85 leading-snug">
          {correctionText}
        </div>
      </div>
    </div>
  );
}
