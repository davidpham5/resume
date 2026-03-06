// WordBuilder.jsx — Current word display + Submit / Clear + Vowel Swap buttons

export default function WordBuilder({
  currentWord,
  selectedIndices,
  onSubmit,
  onClear,
  message,
  turn,
  gameOver,
  letterChoiceMode,
  pendingLetter,
  letterChoices,
  flipsToNextChoice,
  letterOptions,
  onEnterLetterChoice,
  onCancelLetterChoice,
  onSelectLetter,
}) {
  const isPlayerTurn = turn === "player" && !gameOver;

  return (
    <div className="uwc-panel mt-4 flex flex-col items-center gap-2 px-4 py-4">
      {/* Word display — hidden during letter choice mode */}
      {!letterChoiceMode && (
        <div className="min-h-10 px-4 py-2 rounded text-xl tracking-widest w-full max-w-xs text-center uwc-tile-neutral">
          {currentWord ? (
            currentWord
          ) : (
            <span className="text-sm uwc-score-meta">
              tap tiles to build a word
            </span>
          )}
        </div>
      )}

      {/* Feedback message */}
      {message && (
        <p className="text-sm italic text-center uwc-message">{message}</p>
      )}

      {/* Computer thinking indicator */}
      {turn === "computer" && !gameOver && (
        <p className="text-sm animate-pulse uwc-score-computer">
          Computer is thinking…
        </p>
      )}

      {/* Normal play buttons */}
      {!letterChoiceMode && (
        <div className="flex gap-2">
          <button
            onClick={onClear}
            disabled={selectedIndices.length === 0 || !isPlayerTurn}
            className="px-4 py-2 rounded transition-colors uwc-button-secondary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Clear
          </button>
          <button
            onClick={onSubmit}
            disabled={currentWord.length < 2 || !isPlayerTurn}
            className="px-4 py-2 rounded transition-colors font-semibold uwc-button disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Play Word
          </button>
        </div>
      )}

      {/* Vowel swap controls */}
      {/* Letter choice controls */}
      {!letterChoiceMode && (
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={onEnterLetterChoice}
            disabled={!isPlayerTurn || letterChoices <= 0}
            className="px-3 py-1.5 text-xs rounded transition-colors uwc-button-accent disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Choose a Letter ({letterChoices} left)
          </button>
          {letterChoices < 3 ? (
            <p className="text-xs uwc-score-meta">
              Next choice in {flipsToNextChoice} flips
            </p>
          ) : (
            <p className="text-xs uwc-score-meta">Max choices ready</p>
          )}
        </div>
      )}

      {letterChoiceMode && (
        <div className="w-full flex flex-col items-center gap-3">
          <div className="text-xs uwc-score-meta text-center">
            {pendingLetter
              ? `Selected: ${pendingLetter} — pick a tile to replace`
              : "Pick a letter (most common on the left)"}
          </div>
          <div className="uwc-letter-grid">
            {letterOptions.map((letter) => (
              <button
                key={letter}
                onClick={() => onSelectLetter(letter)}
                className={`uwc-letter-button ${
                  pendingLetter === letter ? "uwc-letter-button-active" : ""
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
          <button
            onClick={onCancelLetterChoice}
            className="px-4 py-2 rounded transition-colors uwc-button-ghost"
          >
            Cancel Choice
          </button>
        </div>
      )}
    </div>
  );
}
