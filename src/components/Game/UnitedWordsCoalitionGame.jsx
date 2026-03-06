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
  LETTER_FREQUENCY_ORDER,
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
    // Letter choice mechanic
    letterChoiceMode: false,
    pendingLetter: null,
    letterChoices: 0,
    flipTally: 0,
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
    letterChoiceMode,
    pendingLetter,
    letterChoices,
    flipTally,
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

    const flipsThisTurn = selectedIndices.filter(
      (i) => ownership[i] !== "player",
    ).length;
    const congruent = isCongruent(selectedIndices);
    const newBonusPoints = congruent
      ? { ...bonusPoints, player: bonusPoints.player + 1 }
      : bonusPoints;

    const newOwnership = applyWord(selectedIndices, "player", ownership);
    const newLocked = computeAllLocked(newOwnership);
    const winCheck = checkWinCondition(
      newOwnership,
      newLocked,
      board,
      newBonusPoints,
    );
    const newPlayedWords = new Set(playedWords).add(currentWord.toLowerCase());

    setState((prev) => {
      const newFlipTally = prev.flipTally + flipsThisTurn;
      const earnedChoices =
        Math.floor(newFlipTally / 5) - Math.floor(prev.flipTally / 5);
      const newLetterChoices = Math.min(3, prev.letterChoices + earnedChoices);

      return {
        ...prev,
        ownership: newOwnership,
        locked: newLocked,
        selectedIndices: [],
        currentWord: "",
        bonusPoints: newBonusPoints,
        flipTally: newFlipTally,
        letterChoices: newLetterChoices,
        turn: winCheck.gameOver ? "player" : "computer",
        gameOver: winCheck.gameOver,
        winner: winCheck.winner,
        message: winCheck.gameOver
          ? `Game over! You played: ${currentWord}`
          : `You played: ${currentWord}${congruent ? " +1 chain!" : ""}`,
        playedWords: newPlayedWords,
      };
    });
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
  // Letter choice — earnable tile replacement
  // -------------------------------------------------------------------------
  const handleEnterLetterChoice = useCallback(() => {
    if (gameOver || turn !== "player" || letterChoices <= 0) return;
    setState((prev) => ({
      ...prev,
      letterChoiceMode: true,
      pendingLetter: null,
      selectedIndices: [],
      currentWord: "",
      message: "Choose a letter, then tap a non-locked tile to replace.",
    }));
  }, [gameOver, turn, letterChoices]);

  const handleSelectLetter = useCallback(
    (letter) => {
      if (!letterChoiceMode || gameOver || turn !== "player") return;
      setState((prev) => ({
        ...prev,
        pendingLetter: letter,
        message: `Select a non-locked tile to replace with ${letter}.`,
      }));
    },
    [letterChoiceMode, gameOver, turn],
  );

  const handleCancelLetterChoice = useCallback(() => {
    setState((prev) => ({
      ...prev,
      letterChoiceMode: false,
      pendingLetter: null,
      message: "Your turn — tap tiles to spell a word!",
    }));
  }, []);

  const handleLetterChoiceTileClick = useCallback(
    (index) => {
      if (!letterChoiceMode || gameOver || turn !== "player") return;
      if (!pendingLetter) {
        setState((prev) => ({
          ...prev,
          message: "Select a letter first.",
        }));
        return;
      }
      if (locked[index]) {
        setState((prev) => ({
          ...prev,
          message: "Choose a tile that isn't locked.",
        }));
        return;
      }

      setState((prev) => {
        const newBoard = [...prev.board];
        newBoard[index] = prev.pendingLetter;
        return {
          ...prev,
          board: newBoard,
          letterChoiceMode: false,
          pendingLetter: null,
          letterChoices: Math.max(0, prev.letterChoices - 1),
          selectedIndices: [],
          currentWord: "",
          message: `Replaced tile with ${prev.pendingLetter}.`,
        };
      });
    },
    [letterChoiceMode, gameOver, turn, locked, pendingLetter],
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
      const winCheck = checkWinCondition(
        newOwnership,
        newLocked,
        board,
        newBonusPoints,
      );
      const newPlayedWords = new Set(playedWords).add(
        result.word.toLowerCase(),
      );

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
  }, [
    turn,
    gameOver,
    wordSet,
    board,
    ownership,
    locked,
    playedWords,
    bonusPoints,
  ]);
  const flipsToNextChoice = flipTally % 5 === 0 ? 5 : 5 - (flipTally % 5);

  // -------------------------------------------------------------------------
  // Loading / error states
  // -------------------------------------------------------------------------
  if (loadError) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>Failed to load the dictionary.</p>
        <p className="text-sm mt-1">
          Check your connection and refresh the page.
        </p>
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
        selectedIndices={letterChoiceMode ? [] : selectedIndices}
        onTileClick={
          letterChoiceMode ? handleLetterChoiceTileClick : handleTileClick
        }
        letterChoiceMode={letterChoiceMode}
      />
      <WordBuilder
        currentWord={currentWord}
        selectedIndices={selectedIndices}
        onSubmit={handleSubmitWord}
        onClear={handleClearWord}
        message={message}
        turn={turn}
        gameOver={gameOver}
        letterChoiceMode={letterChoiceMode}
        pendingLetter={pendingLetter}
        letterChoices={letterChoices}
        flipsToNextChoice={flipsToNextChoice}
        letterOptions={LETTER_FREQUENCY_ORDER}
        onEnterLetterChoice={handleEnterLetterChoice}
        onCancelLetterChoice={handleCancelLetterChoice}
        onSelectLetter={handleSelectLetter}
      />

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs uwc-score-meta">
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded uwc-tile-player" /> You
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded uwc-tile-player-locked" />{" "}
          You (locked)
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded uwc-tile-computer" />{" "}
          Computer
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded uwc-tile-computer-locked" />{" "}
          Computer (locked)
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded uwc-tile-selected" />{" "}
          Selected
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded uwc-tile-choice" />{" "}
          Replaceable tile
        </span>
      </div>
    </div>
  );
}
