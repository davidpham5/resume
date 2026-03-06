// Board.jsx — 5x5 grid of Tile components

import Tile from "./Tile.jsx";

export default function Board({
  board,
  ownership,
  locked,
  selectedIndices,
  onTileClick,
  letterChoiceMode,
}) {
  return (
    <div className="uwc-board grid grid-cols-5 gap-1.5 w-full max-w-xs mx-auto">
      {board.map((letter, i) => (
        <Tile
          key={i}
          index={i}
          letter={letter}
          owner={ownership[i]}
          isLocked={locked[i]}
          isSelected={!letterChoiceMode && selectedIndices.includes(i)}
          selectionOrder={selectedIndices.indexOf(i)}
          onClick={onTileClick}
          isChoiceTarget={letterChoiceMode && !locked[i]}
        />
      ))}
    </div>
  );
}
