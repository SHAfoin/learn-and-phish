"use client";

import React from "react";

export type AnswerStatus = "idle" | "selected" | "correct" | "wrong";

type DoubleChoixProps = {
  type: "double_choix";
  label?: string;
  status?: AnswerStatus;
  onFalse?: () => void;
  onTrue?: () => void;
  disabled?: boolean;
};

type QcmOptionProps = {
  type: "qcm";
  index: number;            
  label: string;
  status?: AnswerStatus;    
  onClick?: () => void;
  disabled?: boolean;
  compact?: boolean;        
};

type QcmImageOptionProps = {
  type: "qcm_images";
  index: number;
  label: string;
  imageUrl: string;
  status?: AnswerStatus;
  onClick?: () => void;
  disabled?: boolean;
};


type FillBlankCardProps = {
  type: "phrase_completer";
  status?: AnswerStatus;
  label?: string; 
  showPlaceholder?: boolean; 
  onClick?: () => void;
  disabled?: boolean;
};

export type AnswerCardProps = DoubleChoixProps | QcmOptionProps | QcmImageOptionProps | FillBlankCardProps  ;

export default function AnswerCard(props: AnswerCardProps) {

  if (props.type === "double_choix") {
    const label = props.label ?? "Texte";

    return (
      <div className="w-full flex flex-col items-center">
        <div
          className={[
            "w-full max-w-[420px] sm:max-w-[454px] flex rounded-[10px] overflow-hidden",
            "bg-[var(--color-ocean-800)] shadow-[0_12px_24px_rgba(0,0,0,0.28)]",
            "flex flex-col justify-between",
          ].join(" ")}
        >
          <div className="p-2 pt-3 flex items-center justify-center">
            <div className="w-full h-[28vw] max-h-[315px] min-h-[100px] bg-[var(--color-white)] rounded-[10px] flex items-center justify-center" />
          </div>

          <div className="px-6 pb-5 pt-2 flex justify-center w-full">
            <span className="text-white text-h4-Semibold text-center w-full block break-words leading-snug">
              {label}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-6">
          <button
            type="button"
            aria-label="Faux"
            disabled={props.disabled}
            onClick={props.onFalse}
            className={[
              "w-[58px] h-[58px] rounded-full flex items-center justify-center",
              "border-2 border-[var(--color-quiz-hard)]",
              "bg-[var(--color-quiz-hard)]/50",
              "shadow-[0_10px_18px_rgba(0,0,0,0.25)]",
              "transition-all duration-200 active:scale-95",
              "hover:bg-[var(--color-quiz-hard)]/80 focus:bg-[var(--color-quiz-hard)]/80",
              props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
            ].join(" ")}
          >
            <XIcon />
          </button>

          <button
            type="button"
            aria-label="Vrai"
            disabled={props.disabled}
            onClick={props.onTrue}
            className={[
              "w-[58px] h-[58px] rounded-full flex items-center justify-center",
              "border-2 border-[var(--color-seaweed-600)]",
              "bg-[var(--color-seaweed-700)]/50",
              "shadow-[0_10px_18px_rgba(0,0,0,0.25)]",
              "transition-all duration-200 active:scale-95",
              "hover:bg-[var(--color-seaweed-600)]/80 focus:bg-[var(--color-seaweed-600)]/80",
              props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
            ].join(" ")}
          >
            <CheckIcon />
          </button>
        </div>
      </div>
    );
  }

  else if (props.type === "qcm") {
    const status = props.status ?? "idle";

    const bgClass =
      status === "correct"
        ? "bg-[var(--color-quiz-easy)]"
        : status === "wrong"
          ? "bg-[var(--color-quiz-hard)]"
          : status === "selected"
            ? "bg-[var(--color-ocean-700)]"
            : "bg-[var(--color-ocean-800)]";

    const heightClass = props.compact ? "min-h-[76px]" : "min-h-[98px]";

    return (
      <button
        type="button"
        onClick={props.onClick}
        disabled={props.disabled}
        className={[
          "w-full rounded-[10px] overflow-hidden text-left",
          "shadow-[0_12px_24px_rgba(0,0,0,0.28)]",
          "transition-transform duration-150 active:scale-[0.99]",
          bgClass,
          heightClass,
          props.disabled ? "opacity-90 cursor-not-allowed" : "cursor-pointer",
        ].join(" ")}
      >
        <div className="flex items-center gap-4 p-4">
          {/* carré numéro */}
          <div className="w-[50px] h-[50px] rounded-[10px] bg-[var(--color-ocean-900)] flex items-center justify-center shrink-0">
            <span className="text-white text-h3-bold ">
              {props.index + 1}
            </span>
          </div>

          {/* label */}
          <div className="flex-1">
            <span className="text-white text-h4-Semibold leading-snug block">
              {props.label}
            </span>
          </div>
        </div>
      </button>
    );
  }
  else if (props.type === "qcm_images") {
    const status = props.status ?? "idle";

    const bgClass =
      status === "correct"
        ? "bg-[var(--color-quiz-easy)]"
        : status === "wrong"
        ? "bg-[var(--color-quiz-hard)]"
        : status === "selected"
        ? "bg-[var(--color-ocean-700)]"
        : "bg-[var(--color-ocean-800)]";

    return (
      <button
        type="button"
        onClick={props.onClick}
        disabled={props.disabled}
        className={[
          "answer-card-qcm-img",
          "w-full max-w-[278px] min-w-[220px] min-h-[231px] h-[231px] flex flex-col justify-between items-center",
          "rounded-[10px] overflow-hidden",
          "shadow-[0_8px_16px_rgba(0,0,0,0.18)]",
          "transition-transform duration-150 active:scale-[0.98]",
          bgClass,
          props.disabled ? "opacity-90 cursor-not-allowed" : "cursor-pointer",
        ].join(" ")}
      >
        <div className="w-full flex-1 flex flex-col items-center justify-center px-4 pt-4 pb-2">
          {/* Image: ratio SVG 246/167, padding réduit */}
          {/*color white to change !!*/}
          <div className="w-full aspect-[246/167] bg-white rounded-[10px] overflow-hidden flex items-center justify-center">
            <img
              src={props.imageUrl}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* label bas*/}
        <div className="pb-3 flex items-center justify-center w-full">
          <span className="text-white text-h4-Semibold text-center w-full block break-words leading-snug">
            {props.label}
          </span>
        </div>
      </button>
    );
}
else if (props.type === "phrase_completer") {
  const status: AnswerStatus = props.status ?? "idle";
    const showPlaceholder = props.showPlaceholder ?? false;

    const base =
      "w-full max-w-[229px] h-[53px] px-[78px] py-2 rounded-[15px] " +
      "flex items-center justify-center " +
      "shadow-[2px_2px_4px_rgba(0,0,0,0.25)] " +
      "transition-transform duration-150 active:scale-[0.99]";

    const variant =
      status === "correct"
        ? "bg-[var(--color-seaweed-700)]/50 border-[3px] border-dashed border-[var(--color-seaweed-700)] text-[var(--color-seaweed-700)]"
        : status === "wrong"
          ? "bg-[var(--color-quiz-hard)]/50 border-[3px] border-dashed border-[var(--color-quiz-hard)] text-[var(--color-quiz-hard)]"
          : status === "selected"
            ? "bg-[var(--color-neutral-400)]/50 border-[3px] border-dashed border-[var(--color-ocean-700)] text-[var(--color-ocean-700)]"
            : "bg-[var(--color-neutral-400)]/50 border-[3px] border-dashed border-[var(--color-neutral-700)] text-[var(--color-neutral-200)]";

    return (
      <button
        type="button"
        onClick={props.onClick}
        disabled={props.disabled}
        className={[
          base,
          variant,
          props.disabled ? "opacity-95 cursor-not-allowed" : "cursor-pointer",
        ].join(" ")}
      >
        <span className="text-Display-Normal leading-[36px]">
          {showPlaceholder ? "?" : props.label}
        </span>
      </button>
    );
  }


  return null;
}

function XIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M12 12L28 28M28 12L12 28"
        stroke="var(--color-quiz-hard)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M12 21.5L18 27.5L29 13"
        stroke="var(--color-seaweed-600)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


// Types de quiz pour le positionnement - phrase completer
function getWordClasses(status: AnswerStatus) {
  const base =
    "shrink-0 rounded-[12px] px-4 py-2 h-[48px] min-w-[90px] max-w-full " +
    "flex items-center justify-center " +
    "shadow-[2px_2px_4px_rgba(0,0,0,0.18)] " +
    "transition-transform duration-150 active:scale-[0.99] overflow-hidden"+
    "min-w-0";

  if (status === "selected") {
    return (
      base +
      " bg-[var(--color-ocean-850)]/70 border-[3px] border-[var(--color-ocean-850)]"
    );
  }

  if (status === "correct") {
    return (
      base +
      " bg-[var(--color-seaweed-700)]/50 border-[3px] border-dashed border-[var(--color-seaweed-700)]"
    );
  }

  if (status === "wrong") {
    return (
      base +
      " bg-[var(--color-quiz-hard)]/50 border-[3px] border-dashed border-[var(--color-quiz-hard)]"
    );
  }

  return base + " bg-[var(--color-ocean-950)]/50 border-[3px] border-[var(--color-ocean-900)]";
}

export function AnswerCardWord(props: {
  label: string;
  status?: AnswerStatus;
  disabled?: boolean;
  onClick?: () => void;
}) {
  const status = props.status ?? "idle";

  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
      className={[
        getWordClasses(status),
        props.disabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer",
        "truncate"
      ].join(" ")}
    >
      <span className="text-h4-SemiBold leading-[22px] text-[var(--color-neutral-200)] break-words whitespace-normal w-full text-center">
        {props.label}
      </span>
    </button>
  );
}

export function BlankSlot(props: {
  text?: string;
  state: "empty" | "filled" | "correct" | "wrong";
}) {
  const base =
    "inline-flex shrink-0 rounded-[15px] px-10 py-2 h-[60px] min-w-[220px] " +
    "items-center justify-center " +
    "shadow-[2px_2px_4px_rgba(0,0,0,0.25)]";

  const cls =
    props.state === "empty"
      ? base + " bg-[var(--color-neutral-400)]/50 border-[3px] border-dashed border-[var(--color-neutral-700)]"
      : props.state === "filled"
        ? base + " bg-[var(--color-neutral-400)]/50 border-[3px] border-dashed border-[var(--color-ocean-700)]"
        : props.state === "correct"
          ? base + " bg-[var(--color-seaweed-700)]/50 border-[3px] border-dashed border-[var(--color-seaweed-700)]"
          : base + " bg-[var(--color-quiz-hard)]/50 border-[3px] border-dashed border-[var(--color-quiz-hard)]";

  const textColor =
    props.state === "filled" ? "text-[var(--color-ocean-500)]"
    : props.state === "correct" ? "text-[var(--color-seaweed-700)]"
    : props.state === "wrong" ? "text-[var(--color-quiz-hard)]"
    : "text-[var(--color-neutral-200)]";

  return (
    <div className={cls}>
      <span className={`text-Display-Normal leading-[34px] ${textColor}`}>
        {props.text ?? "?"}
      </span>
    </div>
  );
}
