import React, { useId, useMemo } from "react";

type Props = {
    currentIndex: number; // 0-based
    total: number;
    className?: string;

    includeCurrent?: boolean;
    doneColor?: string; // bleu
    todoColor?: string; // blanc

    strokeWidth?: number; 
    height?: number;      
    step?: number; // default 109
};

export default function WavySegmentsByQuestion({
    currentIndex,
    total,
    className,
    includeCurrent = false,
    doneColor = "var(--color-ocean-600)",
    todoColor = "var(--color-neutral-50)",
    strokeWidth = 6,
    height = 14,
    step = 120,
}: Props) {
    const id = useId();

    const doneCountRaw = includeCurrent ? currentIndex + 1 : currentIndex;
    const doneCount = Math.max(0, Math.min(total, doneCountRaw));

    const vbW = useMemo(() => Math.max(1, total * step), [total, step]);

    return (
        <div className={`${className ?? ""} flex justify-center`}>
            <svg
                viewBox={`0 0 ${vbW} 14`}
                height={height}
                // ✅ ne PAS étirer à tout prix : on garde les proportions
                preserveAspectRatio="xMinYMid meet"
                // ✅ responsive sans étirement : l’svg ne dépassera jamais
                style={{ width: "auto", maxWidth: "100%", display: "block" }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <path
                        id={`${id}-wave`}
                        d="M3 3C10.2148 8.71605 15.802 10.6954 24.7219 10.6954C33.6418 10.6954 37.5238 3 46.4438 3C55.3637 3 59.2457 10.6954 68.1656 10.6954C77.0855 10.6954 80.9676 3 89.8875 3C98.8074 3 102.689 10.6954 111.609 10.6954"
                    />
                </defs>

                {Array.from({ length: total }).map((_, i) => {
                    const color = i < doneCount ? doneColor : todoColor;

                    const x = i * step; 
                    const mirrored = i % 2 === 1;

                    const minX = 3;
                    const maxX = 111.609;
                    const mirrorAxis = minX + maxX; 

                    const transform = mirrored
                        ? `translate(${x + mirrorAxis} 0) scale(-1 1)`
                        : `translate(${x} 0)`;

                    return (
                        <g key={i} transform={transform}>
                            <use
                                href={`#${id}-wave`}
                                stroke={color}
                                strokeWidth={strokeWidth}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </g>
                    );
                })}


            </svg>
    
        </div>
    );
}
