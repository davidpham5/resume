// Board.jsx — 5x5 grid of Tile components

import Tile from './Tile.jsx';
import { VOWELS } from './gameLogic.js';

export default function Board({
  board, ownership, locked, selectedIndices, onTileClick,
  swapMode, swapSourceIndex, swapSourceSelected, swappedVowelPositions,
}) {
  return (
    <div className="grid grid-cols-5 gap-1.5 w-full max-w-xs mx-auto">
      {board.map((letter, i) => {
        const isVowel = VOWELS.has(letter);
        return (
          <Tile
            key={i}
            index={i}
            letter={letter}
            owner={ownership[i]}
            isLocked={locked[i]}
            isSelected={!swapMode && selectedIndices.includes(i)}
            selectionOrder={selectedIndices.indexOf(i)}
            onClick={onTileClick}
            swapMode={swapMode}
            swapSourceSelected={swapSourceSelected}
            isSwapSource={swapMode && swapSourceIndex === i}
            isSwappableVowel={swapMode && isVowel && !swappedVowelPositions.has(i)}
            isAlreadySwapped={swapMode && isVowel && swappedVowelPositions.has(i)}
          />
        );
      })}
    </div>
  );
}
