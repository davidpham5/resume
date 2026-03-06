// Scoreboard.jsx — Player vs Computer scores, lock count, game over state

import { LETTER_VALUES } from "./gameLogic.js";

export default function Scoreboard({
  board,
  ownership,
  locked,
  winner,
  gameOver,
  onNewGame,
  bonusPoints,
}) {
  // Tile counts
  const playerTiles = ownership.filter((o) => o === "player").length;
  const aiTiles = ownership.filter((o) => o === "computer").length;
  const totalLocked = locked.filter(Boolean).length;

  // Weighted point totals — locked tiles are worth 2× their base value
  let playerTileScore = 0,
    aiTileScore = 0;
  for (let i = 0; i < 25; i++) {
    const val = (LETTER_VALUES[board[i]] || 1) * (locked[i] ? 2 : 1);
    if (ownership[i] === "player") playerTileScore += val;
    else if (ownership[i] === "computer") aiTileScore += val;
  }

  const playerScore = playerTileScore + bonusPoints.player;
  const aiScore = aiTileScore + bonusPoints.computer;

  const winnerText =
    winner === "player"
      ? "🎉 You win!"
      : winner === "computer"
        ? "Computer wins."
        : winner === "tie"
          ? "It's a tie!"
          : null;

  return (
    <div className="uwc-panel mb-4 flex justify-between items-center w-full max-w-xs mx-auto px-3 py-2">
      {/* Player score */}
      <div className="text-center min-w-16">
        <div className="uwc-score-player font-bold text-3xl">{playerScore}</div>
        <div className="text-xs uwc-score-meta">You · {playerTiles} tiles</div>
        {bonusPoints.player > 0 && (
          <div className="text-xs uwc-bonus">+{bonusPoints.player} chain</div>
        )}
      </div>

      {/* Center: lock progress + game over */}
      <div className="text-center flex flex-col items-center gap-1">
        <div className="text-sm uwc-score-meta">{totalLocked}/25 locked</div>

        {/* Progress bar */}
        <div className="uwc-progress w-24 h-1.5 rounded-full overflow-hidden">
          <div
            className="uwc-progress-fill h-full rounded-full transition-all duration-300"
            style={{ width: `${(totalLocked / 25) * 100}%` }}
          />
        </div>

        {gameOver && (
          <div className="mt-2 flex flex-col items-center gap-1">
            <div className="font-bold uwc-title text-sm">{winnerText}</div>
            <button
              onClick={onNewGame}
              className="px-3 py-1 text-xs rounded transition-colors uwc-button"
            >
              New Game
            </button>
          </div>
        )}
      </div>

      {/* Computer score */}
      <div className="text-center min-w-16">
        <div className="uwc-score-computer font-bold text-3xl">{aiScore}</div>
        <div className="text-xs uwc-score-meta">Computer · {aiTiles} tiles</div>
        {bonusPoints.computer > 0 && (
          <div className="text-xs uwc-bonus">+{bonusPoints.computer} chain</div>
        )}
      </div>
    </div>
  );
}
