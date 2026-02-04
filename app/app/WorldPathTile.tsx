"use client";

import React from "react";

interface WorldPathTileProps {
  number: number;
  variant?: "done" | "todo" | "disabled";
  className?: string;
}

export default function WorldPathTile({
  number,
  variant = "todo",
  className = "w-50 h-50",
}: WorldPathTileProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const colors = {
    done: {
      circle: "#EAA937",
      shadow: "#EAA93788",
      hover: "#D28F17",
    },
    todo: {
      circle: "#1FD6F9",
      shadow: "#1FD6F988",
      hover: "#27AED3",
    },
    disabled: {
      circle: "#9E9E9E",
      shadow: "#616161",
      hover: "#9E9E9E",
    },
  };

  const {
    circle: circleColor,
    shadow: shadowColor,
    hover: hoverColor,
  } = colors[variant];

  return (
    <div className={`relative ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 96 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ombre */}
        <ellipse cx="48" cy="38" rx="25" ry="20" fill={shadowColor} />
        {/* Ovale principal */}
        <ellipse
          cx="48"
          cy="32"
          rx="25"
          ry="20"
          fill={isHovered && variant !== "disabled" ? hoverColor : circleColor}
          className={`transition-all duration-200  ${variant !== "disabled" ? "cursor-pointer" : "cursor-not-allowed"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {/* Chiffre ou Image */}
        {variant === "disabled" ? (
          <image
            href="/svg/icons/lock.svg"
            x="38"
            y="22"
            width="20"
            height="20"
          />
        ) : (
          <text
            x="48"
            y="38"
            textAnchor="middle"
            fill="white"
            fontSize="24"
            fontWeight="bold"
            pointerEvents="none"
          >
            {number}
          </text>
        )}
      </svg>
    </div>
  );
}
