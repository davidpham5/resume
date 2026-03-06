// UnitedWordsCoalitionGame.jsx — Root component; owns all game state and turn logic

import { useState, useEffect, useCallback } from "react";
import Board from "./Board.jsx";
import WordBuilder from "./WordBuilder.jsx";
import Scoreboard from "./Scoreboard.jsx";
import { fetchWordList } from "./wordlist.js";
import {
  generateBoard,
  computeAllLocked,
  applyWord,
  validateWord,
  checkWinCondition,
  findAIWord,
  swapTiles,
  VOWELS,
  isCongruent,
} from "./gameLogic.js";

function makeInitialState() {
  const board = generateBoard();
  const ownership = Array(25).fill("none");
  const locked = Array(25).fill(false);
  return {
    board,
    ownership,
    locked,
    turn: "player",
    gameOver: false,
    winner: null,
    selectedIndices: [],
    currentWord: "",
    message: "Your turn — tap tiles to spell a word!",
    playedWords: new Set(),
    // Vowel swap mechanic
    swapsRemaining: 3,
    swapMode: false,
    swapSourceIndex: null,
    swappedVowelPositions: new Set(),
    // Chain bonus points (congruent words)
    bonusPoints: { player: 0, computer: 0 },
  };
}

export default function UnitedWordsCoalitionGame() {
  const [wordSet, setWordSet] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [state, setState] = useState(makeInitialState);

  // Load the full dictionary on mount
  useEffect(() => {
    fetchWordList()
      .then(setWordSet)
      .catch(() => setLoadError(true));
  }, []);

  const {
    board,
    ownership,
    locked,
    turn,
    gameOver,
    winner,
    selectedIndices,
    currentWord,
    message,
    playedWords,
    swapsRemaining,
    swapMode,
    swapSourceIndex,
    swappedVowelPositions,
    bonusPoints,
  } = state;

  // -------------------------------------------------------------------------
  // Tile click — build current word
  // -------------------------------------------------------------------------
  const handleTileClick = useCallback(
    (index) => {
      if (gameOver || turn !== "player") return;

      setState((prev) => {
        const existingPos = prev.selectedIndices.indexOf(index);
        if (existingPos !== -1) {
          const newIndices = prev.selectedIndices.slice(0, existingPos);
          return {
            ...prev,
            selectedIndices: newIndices,
            currentWord: newIndices.map((i) => prev.board[i]).join(""),
          };
        }
        const newIndices = [...prev.selectedIndices, index];
        return {
          ...prev,
          selectedIndices: newIndices,
          currentWord: newIndices.map((i) => prev.board[i]).join(""),
        };
      });
    },
    [gameOver, turn],
  );

  // -------------------------------------------------------------------------
  // Submit word
  // -------------------------------------------------------------------------
  const handleSubmitWord = useCallback(() => {
    if (gameOver || turn !== "player" || !wordSet) return;

    const result = validateWord(
      currentWord,
      selectedIndices,
      board,
      ownership,
      wordSet,
      "player",
    );
    if (!result.valid) {
      setState((prev) => ({ ...prev, message: result.reason }));
      return;
    }

    const congruent = isCongruent(selectedIndices);
    const newBonusPoints = congruent
      ? { ...bonusPoints, player: bonusPoints.player + 1 }
      : bonusPoints;

    const newOwnership = applyWord(selectedIndices, "player", ownership);
    const newLocked = computeAllLocked(newOwnership);
    const winCheck = checkWinCondition(newOwnership, newLocked, board, newBonusPoints);
    const newPlayedWords = new Set(playedWords).add(currentWord.toLowerCase());

    setState((prev) => ({
      ...prev,
      ownership: newOwnership,
      locked: newLocked,
      selectedIndices: [],
      currentWord: "",
      bonusPoints: newBonusPoints,
      turn: winCheck.gameOver ? "player" : "computer",
      gameOver: winCheck.gameOver,
      winner: winCheck.winner,
      message: winCheck.gameOver
        ? `Game over! You played: ${currentWord}`
        : `You played: ${currentWord}${congruent ? " +1 chain!" : ""}`,
      playedWords: newPlayedWords,
    }));
  }, [
    gameOver,
    turn,
    wordSet,
    currentWord,
    selectedIndices,
    board,
    ownership,
    playedWords,
    bonusPoints,
  ]);

  // -------------------------------------------------------------------------
  // Clear word selection
  // -------------------------------------------------------------------------
  const handleClearWord = useCallback(() => {
    setState((prev) => ({ ...prev, selectedIndices: [], currentWord: "" }));
  }, []);

  // -------------------------------------------------------------------------
  // New game
  // -------------------------------------------------------------------------
  const handleNewGame = useCallback(() => {
    setState(makeInitialState());
  }, []);

  // -------------------------------------------------------------------------
  // Swap mechanic — enter / cancel swap mode
  // -------------------------------------------------------------------------
  const handleEnterSwapMode = useCallback(() => {
    if (gameOver || turn !== "player" || swapsRemaining <= 0) return;
    setState((prev) => ({
      ...prev,
      swapMode: true,
      swapSourceIndex: null,
      selectedIndices: [],
      currentWord: "",
      message: "Select a vowel to move.",
    }));
  }, [gameOver, turn, swapsRemaining]);

  const handleCancelSwap = useCallback(() => {
    setState((prev) => ({
      ...prev,
      swapMode: false,
      swapSourceIndex: null,
      message: "Your turn — tap tiles to spell a word!",
    }));
  }, []);

  // -------------------------------------------------------------------------
  // Swap tile click — two-phase: pick vowel source, then destination
  // -------------------------------------------------------------------------
  const handleSwapTileClick = useCallback(
    (index) => {
      if (!swapMode || gameOver || turn !== "player") return;

      if (swapSourceIndex === null) {
        if (!VOWELS.has(board[index])) {
          setState((prev) => ({
            ...prev,
            message: "Pick a vowel — A, E, I, O, or U.",
          }));
          return;
        }
        if (swappedVowelPositions.has(index)) {
          setState((prev) => ({
            ...prev,
            message: "That vowel has already been moved once.",
          }));
          return;
        }
        setState((prev) => ({
          ...prev,
          swapSourceIndex: index,
          message: `Moving ${board[index]} — select any tile to swap with.`,
        }));
      } else {
        if (index === swapSourceIndex) {
          setState((prev) => ({
            ...prev,
            swapSourceIndex: null,
            message: "Select a vowel to move.",
          }));
          return;
        }

        const {
          board: newBoard,
          ownership: newOwnership,
          locked: newLocked,
        } = swapTiles(board, ownership, swapSourceIndex, index);

        const newSwapped = new Set(swappedVowelPositions);
        if (newSwapped.has(index)) {
          newSwapped.delete(index);
          newSwapped.add(swapSourceIndex);
        }
        newSwapped.add(index);

        const winCheck = checkWinCondition(newOwnership, newLocked, newBoard, bonusPoints);
        const movedLetter = board[swapSourceIndex];

        setState((prev) => ({
          ...prev,
          board: newBoard,
          ownership: newOwnership,
          locked: newLocked,
          swapMode: false,
          swapSourceIndex: null,
          swapsRemaining: prev.swapsRemaining - 1,
          swappedVowelPositions: newSwapped,
          turn: winCheck.gameOver ? "player" : "computer",
          gameOver: winCheck.gameOver,
          winner: winCheck.winner,
          message: winCheck.gameOver
            ? `Game over! You moved ${movedLetter}.`
            : `Moved ${movedLetter} — Computer's turn!`,
        }));
      }
    },
    [
      swapMode,
      gameOver,
      turn,
      swapSourceIndex,
      board,
      ownership,
      swappedVowelPositions,
      bonusPoints,
    ],
  );

  // -------------------------------------------------------------------------
  // Computer turn — fires whenever turn switches to 'computer'
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (turn !== "computer" || gameOver || !wordSet) return;

    const timer = setTimeout(() => {
      const result = findAIWord(board, ownership, locked, wordSet, playedWords);

      if (!result) {
        setState((prev) => ({
          ...prev,
          turn: "player",
          message: "Computer passed (no valid word). Your turn!",
        }));
        return;
      }

      const congruent = isCongruent(result.indices);
      const newBonusPoints = congruent
        ? { ...bonusPoints, computer: bonusPoints.computer + 1 }
        : bonusPoints;

      const newOwnership = applyWord(result.indices, "computer", ownership);
      const newLocked = computeAllLocked(newOwnership);
      const winCheck = checkWinCondition(newOwnership, newLocked, board, newBonusPoints);
      const newPlayedWords = new Set(playedWords).add(result.word.toLowerCase());

      setState((prev) => ({
        ...prev,
        ownership: newOwnership,
        locked: newLocked,
        bonusPoints: newBonusPoints,
        turn: winCheck.gameOver ? "computer" : "player",
        gameOver: winCheck.gameOver,
        winner: winCheck.winner,
        message: winCheck.gameOver
          ? `Game over! Computer played: ${result.word}`
          : `Computer played: ${result.word}${congruent ? " +1 chain!" : ""} — your turn!`,
        playedWords: newPlayedWords,
      }));
    }, 900);

    return () => clearTimeout(timer);
  }, [turn, gameOver, wordSet, board, ownership, locked, playedWords, bonusPoints]);

  const isSwapSourceSelected = swapMode && swapSourceIndex !== null;

  // -------------------------------------------------------------------------
  // Loading / error states
  // -------------------------------------------------------------------------
  if (loadError) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>Failed to load the dictionary.</p>
        <p className="text-sm mt-1">Check your connection and refresh the page.</p>
      </div>
    );
  }

  if (!wordSet) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p className="animate-pulse">Loading dictionary…</p>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------
  return (
    <div className="flex flex-col items-center select-none">
      <Scoreboard
        board={board}
        ownership={ownership}
        locked={locked}
        winner={winner}
        gameOver={gameOver}
        onNewGame={handleNewGame}
        bonusPoints={bonusPoints}
      />
      <Board
        board={board}
        ownership={ownership}
        locked={locked}
        selectedIndices={swapMode ? [] : selectedIndices}
        onTileClick={swapMode ? handleSwapTileClick : handleTileClick}
        swapMode={swapMode}
        swapSourceIndex={swapSourceIndex}
        swapSourceSelected={isSwapSourceSelected}
        swappedVowelPositions={swappedVowelPositions}
      />
      <WordBuilder
        currentWord={currentWord}
        selectedIndices={selectedIndices}
        onSubmit={handleSubmitWord}
        onClear={handleClearWord}
        message={message}
        turn={turn}
        gameOver={gameOver}
        swapMode={swapMode}
        swapsRemaining={swapsRemaining}
        onEnterSwap={handleEnterSwapMode}
        onCancelSwap={handleCancelSwap}
      />

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded bg-blue-400" /> You
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded bg-blue-700" /> You (locked)
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded bg-red-400" /> Computer
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded bg-red-700" /> Computer (locked)
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded bg-amber-300" /> Selected
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded bg-green-300" /> Movable vowel
        </span>
      </div>
    </div>
  );
}
