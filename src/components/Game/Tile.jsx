// Tile.jsx — A single letter tile on the Letterpress board

import { LETTER_VALUES } from './gameLogic.js';

export default function Tile({
  index, letter, owner, isLocked, isSelected, selectionOrder, onClick,
  swapMode, swapSourceSelected, isSwapSource, isSwappableVowel, isAlreadySwapped,
}) {
  const pointValue = LETTER_VALUES[letter] || 1;
  const isHighValue = pointValue >= 5;

  const base =
    'aspect-square flex items-center justify-center font-mono font-bold text-xl rounded cursor-pointer select-none transition-colors duration-150 relative';

  let color;

  if (swapMode) {
    if (isSwapSource) {
      // Selected vowel — purple
      color = 'bg-purple-500 text-white ring-2 ring-purple-800';
    } else if (!swapSourceSelected && isSwappableVowel) {
      // Phase 1: valid vowel source — green
      color = 'bg-green-300 text-green-900 hover:bg-green-400';
    } else if (!swapSourceSelected && isAlreadySwapped) {
      // Phase 1: vowel already used — grayed out
      color = 'bg-gray-200 text-gray-400 cursor-not-allowed';
    } else if (!swapSourceSelected) {
      // Phase 1: consonants — dimmed, not a valid source
      if (owner === 'player' && isLocked) color = 'bg-blue-700 text-white opacity-40';
      else if (owner === 'player') color = 'bg-blue-400 text-white opacity-40';
      else if (owner === 'computer' && isLocked) color = 'bg-red-700 text-white opacity-40';
      else if (owner === 'computer') color = 'bg-red-400 text-white opacity-40';
      else color = 'bg-gray-200 text-gray-500 opacity-40';
    } else {
      // Phase 2: any tile is a valid destination — show normal colors
      if (owner === 'player' && isLocked) color = 'bg-blue-700 text-white hover:brightness-125';
      else if (owner === 'player') color = 'bg-blue-400 text-white hover:brightness-125';
      else if (owner === 'computer' && isLocked) color = 'bg-red-700 text-white hover:brightness-125';
      else if (owner === 'computer') color = 'bg-red-400 text-white hover:brightness-125';
      else color = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
    }
  } else if (isSelected) {
    color = 'bg-amber-300 text-amber-900';
  } else if (owner === 'player' && isLocked) {
    color = 'bg-blue-700 text-white';
  } else if (owner === 'player') {
    color = 'bg-blue-400 text-white';
  } else if (owner === 'computer' && isLocked) {
    color = 'bg-red-700 text-white';
  } else if (owner === 'computer') {
    color = 'bg-red-400 text-white';
  } else {
    color = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  }

  return (
    <button
      className={`${base} ${color}`}
      onClick={() => onClick(index)}
      aria-label={`${letter}, ${pointValue} pts${isLocked ? ', locked' : ''}${owner !== 'none' ? `, owned by ${owner}` : ''}`}
    >
      {letter}
      {isSelected && (
        <span className="absolute top-0.5 right-1 text-xs font-normal text-amber-700 leading-none">
          {selectionOrder + 1}
        </span>
      )}
      {/* Point value — bottom right, always visible */}
      <span className={`absolute bottom-0.5 right-0.5 leading-none font-mono
        ${isSelected
          ? 'text-xs text-amber-600 opacity-70'
          : isHighValue
            ? 'text-xs font-bold opacity-90'
            : 'text-xs opacity-40'
        }`}>
        {pointValue}
      </span>
    </button>
  );
}
