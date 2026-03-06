// WordBuilder.jsx — Current word display + Submit / Clear + Vowel Swap buttons

export default function WordBuilder({
  currentWord, selectedIndices, onSubmit, onClear, message, turn, gameOver,
  swapMode, swapsRemaining, onEnterSwap, onCancelSwap,
}) {
  const isPlayerTurn = turn === 'player' && !gameOver;

  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      {/* Word display — hidden during swap mode */}
      {!swapMode && (
        <div className="min-h-10 px-4 py-2 bg-gray-100 rounded text-xl font-mono tracking-widest text-gray-800 w-full max-w-xs text-center">
          {currentWord
            ? currentWord
            : <span className="text-gray-400 text-base">tap tiles to build a word</span>
          }
        </div>
      )}

      {/* Feedback message */}
      {message && (
        <p className="text-sm text-gray-500 italic text-center">{message}</p>
      )}

      {/* Computer thinking indicator */}
      {turn === 'computer' && !gameOver && (
        <p className="text-sm text-red-500 animate-pulse">Computer is thinking…</p>
      )}

      {/* Normal play buttons */}
      {!swapMode && (
        <div className="flex gap-2">
          <button
            onClick={onClear}
            disabled={selectedIndices.length === 0 || !isPlayerTurn}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Clear
          </button>
          <button
            onClick={onSubmit}
            disabled={currentWord.length < 2 || !isPlayerTurn}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-semibold"
          >
            Play Word
          </button>
        </div>
      )}

      {/* Vowel swap controls */}
      {!swapMode && isPlayerTurn && swapsRemaining > 0 && (
        <button
          onClick={onEnterSwap}
          className="px-3 py-1.5 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors border border-purple-300"
        >
          Move a Vowel ({swapsRemaining} left)
        </button>
      )}
      {!swapMode && isPlayerTurn && swapsRemaining === 0 && (
        <p className="text-xs text-gray-400">No vowel moves remaining</p>
      )}

      {swapMode && (
        <button
          onClick={onCancelSwap}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
        >
          Cancel Move
        </button>
      )}
    </div>
  );
}
