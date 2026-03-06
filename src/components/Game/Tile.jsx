// Tile.jsx — A single letter tile on the Letterpress board

import { useEffect, useRef, useState } from "react";
import { LETTER_VALUES } from "./gameLogic.js";

export default function Tile({
  index,
  letter,
  owner,
  isLocked,
  isSelected,
  selectionOrder,
  onClick,
  isChoiceTarget,
}) {
  const pointValue = LETTER_VALUES[letter] || 1;
  const isHighValue = pointValue >= 5;
  const [flipClass, setFlipClass] = useState("");
  const prevOwnerRef = useRef(owner);

  const base =
    "uwc-tile aspect-square flex items-center justify-center font-bold text-xl rounded cursor-pointer select-none transition-colors duration-150 relative";

  let color;

  if (isSelected) {
    color = "uwc-tile-selected";
  } else if (owner === "player" && isLocked) {
    color = "uwc-tile-player-locked";
  } else if (owner === "player") {
    color = "uwc-tile-player";
  } else if (owner === "computer" && isLocked) {
    color = "uwc-tile-computer-locked";
  } else if (owner === "computer") {
    color = "uwc-tile-computer";
  } else {
    color = "uwc-tile-neutral";
  }

  useEffect(() => {
    const prevOwner = prevOwnerRef.current;
    if (prevOwner !== owner && (owner === "player" || owner === "computer")) {
      const nextClass =
        owner === "player" ? "uwc-flip-player" : "uwc-flip-computer";
      setFlipClass(nextClass);
      const timer = setTimeout(() => setFlipClass(""), 420);
      prevOwnerRef.current = owner;
      return () => clearTimeout(timer);
    }
    prevOwnerRef.current = owner;
  }, [owner]);

  return (
    <button
      className={`${base} ${color} ${flipClass} ${isChoiceTarget ? "uwc-tile-choice" : ""}`}
      onClick={() => onClick(index)}
      aria-label={`${letter}, ${pointValue} pts${isLocked ? ", locked" : ""}${owner !== "none" ? `, owned by ${owner}` : ""}`}
    >
      {letter}
      {isSelected && (
        <span className="absolute top-0.5 right-1 text-xs font-normal text-amber-900 leading-none">
          {selectionOrder + 1}
        </span>
      )}
      {/* Point value — bottom right, always visible */}
      <span
        className={`absolute bottom-0.5 right-0.5 leading-none
        ${
          isSelected
            ? "text-xs text-amber-800 opacity-70"
            : isHighValue
              ? "text-xs font-bold opacity-90"
              : "text-xs opacity-40"
        }`}
      >
        {pointValue}
      </span>
    </button>
  );
}
