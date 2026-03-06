// gameLogic.js — Pure game functions for Letterpress web demo
// No React dependencies; safe to import anywhere.

// ---------------------------------------------------------------------------
// Letter frequency (Scrabble-weighted)
// ---------------------------------------------------------------------------
const LETTER_POOL = [
  ["A", 9],
  ["B", 2],
  ["C", 2],
  ["D", 4],
  ["E", 12],
  ["F", 2],
  ["G", 3],
  ["H", 2],
  ["I", 9],
  ["J", 1],
  ["K", 1],
  ["L", 4],
  ["M", 2],
  ["N", 6],
  ["O", 8],
  ["P", 2],
  ["Q", 1],
  ["R", 6],
  ["S", 4],
  ["T", 6],
  ["U", 4],
  ["V", 2],
  ["W", 2],
  ["X", 1],
  ["Y", 2],
  ["Z", 1],
];

export const LETTER_FREQUENCY_ORDER = [...LETTER_POOL]
  .sort((a, b) => b[1] - a[1])
  .map(([letter]) => letter);

// ---------------------------------------------------------------------------
// Letter point values (Scrabble standard)
// Locked tiles are worth 2× their base value — locking a Q = 20 pts.
// ---------------------------------------------------------------------------
export const LETTER_VALUES = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

export const VOWELS = new Set(["A", "E", "I", "O", "U"]);

// ---------------------------------------------------------------------------
// generateBoard — returns string[25] of uppercase letters
// ---------------------------------------------------------------------------
export function generateBoard() {
  const pool = [];
  for (const [letter, count] of LETTER_POOL) {
    for (let i = 0; i < count; i++) pool.push(letter);
  }
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 25);
}

// ---------------------------------------------------------------------------
// getNeighborIndices — all 8-directional neighbors within 5x5 grid
// ---------------------------------------------------------------------------
export function getNeighborIndices(index) {
  const row = Math.floor(index / 5);
  const col = index % 5;
  const neighbors = [];
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = row + dr;
      const nc = col + dc;
      if (nr >= 0 && nr <= 4 && nc >= 0 && nc <= 4) {
        neighbors.push(nr * 5 + nc);
      }
    }
  }
  return neighbors;
}

// ---------------------------------------------------------------------------
// isCongruent — true when each consecutive tile in the selection is adjacent
// (8-directional). Congruent words earn a +1 point bonus.
// ---------------------------------------------------------------------------
export function isCongruent(selectedIndices) {
  if (selectedIndices.length < 2) return false;
  for (let i = 0; i < selectedIndices.length - 1; i++) {
    const neighbors = getNeighborIndices(selectedIndices[i]);
    if (!neighbors.includes(selectedIndices[i + 1])) return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// isLocked — tile is locked when owned and all neighbors owned by same player
// ---------------------------------------------------------------------------
export function isLocked(index, ownership) {
  if (ownership[index] === "none") return false;
  const owner = ownership[index];
  const neighbors = getNeighborIndices(index);
  return neighbors.every((n) => ownership[n] === owner);
}

// ---------------------------------------------------------------------------
// computeAllLocked — returns boolean[25]
// ---------------------------------------------------------------------------
export function computeAllLocked(ownership) {
  return Array.from({ length: 25 }, (_, i) => isLocked(i, ownership));
}

// ---------------------------------------------------------------------------
// applyWord — immutable ownership update; sets selectedIndices to currentPlayer
// ---------------------------------------------------------------------------
export function applyWord(selectedIndices, currentPlayer, ownership) {
  const next = [...ownership];
  for (const i of selectedIndices) {
    next[i] = currentPlayer;
  }
  return next;
}

// ---------------------------------------------------------------------------
// validateWord — 5-step fail-fast validation
// Returns { valid: boolean, reason: string }
// ---------------------------------------------------------------------------
export function validateWord(
  word,
  selectedIndices,
  board,
  ownership,
  wordSet,
  currentPlayer,
) {
  if (word.length < 2) {
    return { valid: false, reason: "Word must be at least 2 letters." };
  }
  if (!wordSet.has(word.toLowerCase())) {
    return { valid: false, reason: `"${word}" not found in word list.` };
  }
  // Verify the selected tiles actually spell the word
  const spelled = selectedIndices.map((i) => board[i]).join("");
  if (spelled !== word) {
    return { valid: false, reason: "Selected tiles don't spell that word." };
  }
  // Must include at least one tile not already owned by current player
  const hasNewTile = selectedIndices.some(
    (i) => ownership[i] !== currentPlayer,
  );
  if (!hasNewTile) {
    return {
      valid: false,
      reason: "Must include at least one tile you don't own.",
    };
  }
  // Cannot steal a locked opponent tile
  for (const i of selectedIndices) {
    if (ownership[i] !== currentPlayer && isLocked(i, ownership)) {
      return { valid: false, reason: "Cannot steal a locked tile." };
    }
  }
  return { valid: true, reason: "" };
}

// ---------------------------------------------------------------------------
// checkWinCondition — game ends when all 25 tiles are locked
// Winner determined by weighted point total, not tile count.
// Locked tiles are worth 2× their base letter value.
// ---------------------------------------------------------------------------
export function checkWinCondition(
  ownership,
  locked,
  board,
  bonusPoints = { player: 0, computer: 0 },
) {
  if (!locked.every(Boolean)) {
    return { gameOver: false, winner: null };
  }
  let playerScore = bonusPoints.player;
  let computerScore = bonusPoints.computer;
  for (let i = 0; i < 25; i++) {
    const val = (LETTER_VALUES[board[i]] || 1) * (locked[i] ? 2 : 1);
    if (ownership[i] === "player") playerScore += val;
    else if (ownership[i] === "computer") computerScore += val;
  }
  const winner =
    playerScore > computerScore
      ? "player"
      : computerScore > playerScore
        ? "computer"
        : "tie";
  return { gameOver: true, winner };
}

// ---------------------------------------------------------------------------
// swapTiles — swap letters AND ownership at two positions, recompute locks
// ---------------------------------------------------------------------------
export function swapTiles(board, ownership, fromIndex, toIndex) {
  const newBoard = [...board];
  const newOwnership = [...ownership];
  [newBoard[fromIndex], newBoard[toIndex]] = [
    newBoard[toIndex],
    newBoard[fromIndex],
  ];
  [newOwnership[fromIndex], newOwnership[toIndex]] = [
    newOwnership[toIndex],
    newOwnership[fromIndex],
  ];
  const newLocked = computeAllLocked(newOwnership);
  return { board: newBoard, ownership: newOwnership, locked: newLocked };
}

// ---------------------------------------------------------------------------
// AI helpers
// ---------------------------------------------------------------------------

// Build a map of letter → list of available tile indices
// "Available" = not locked by opponent (AI can use its own locked tiles too)
function buildAvailableMap(board, ownership, locked) {
  const map = new Map();
  for (let i = 0; i < 25; i++) {
    // Skip tiles that are locked by the opponent
    if (locked[i] && ownership[i] === "player") continue;
    const letter = board[i];
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter).push(i);
  }
  return map;
}

// Check if the board has enough letters to spell `word`
function canSpellWord(word, availableMap) {
  const needed = new Map();
  for (const ch of word) {
    needed.set(ch, (needed.get(ch) || 0) + 1);
  }
  for (const [ch, count] of needed) {
    if ((availableMap.get(ch) || []).length < count) return false;
  }
  return true;
}

// Assign tile indices for each letter in the word
// Priority: player tiles (steal, prefer high-value) → none → ai own tiles
function assignIndices(word, availableMap, ownership, board) {
  const used = new Set();
  const result = [];

  for (const ch of word) {
    const candidates = availableMap.get(ch) || [];
    const sorted = [...candidates]
      .filter((i) => !used.has(i))
      .sort((a, b) => {
        const rank = (o) => (o === "player" ? 0 : o === "none" ? 1 : 2);
        const tierDiff = rank(ownership[a]) - rank(ownership[b]);
        if (tierDiff !== 0) return tierDiff;
        // Within same tier, prefer higher letter value
        return (LETTER_VALUES[board[b]] || 1) - (LETTER_VALUES[board[a]] || 1);
      });
    if (sorted.length === 0) return null;
    const chosen = sorted[0];
    result.push(chosen);
    used.add(chosen);
  }
  return result;
}

// Score a potential AI word — weighted by letter point values
function scoreWord(word, indices, board, ownership, locked) {
  let score = word.length * 0.5;
  for (const i of indices) {
    const val = LETTER_VALUES[board[i]] || 1;
    if (ownership[i] === "player")
      score += val * 2; // steal: gain val + opponent loses val
    else if (ownership[i] === "none") score += val;
  }
  // Locking bonus: a newly locked tile is worth double, so lock = extra val
  const simOwnership = applyWord(indices, "computer", ownership);
  const simLocked = computeAllLocked(simOwnership);
  for (let i = 0; i < 25; i++) {
    if (simLocked[i] && !locked[i] && simOwnership[i] === "computer") {
      score += (LETTER_VALUES[board[i]] || 1) * 2;
    }
  }
  if (isCongruent(indices)) score += 1; // chain bonus
  return score;
}

// ---------------------------------------------------------------------------
// findAIWord — easy-mode word search: sample a random subset each turn
// Returns { word: string, indices: number[] } or null
// ---------------------------------------------------------------------------
export function findAIWord(
  board,
  ownership,
  locked,
  wordSet,
  playedWords = new Set(),
) {
  const availableMap = buildAvailableMap(board, ownership, locked);
  const words = Array.isArray(wordSet) ? wordSet : Array.from(wordSet);
  const sampleSize = 80;
  const maxAttempts = 400;

  let bestResult = null;
  let bestScore = -1;
  let attempts = 0;
  let samples = 0;

  while (samples < sampleSize && attempts < maxAttempts) {
    attempts += 1;
    const word = words[Math.floor(Math.random() * words.length)];
    if (!word || word.length < 2 || word.length > 6) continue;
    if (playedWords.has(word)) continue;

    const upper = word.toUpperCase();
    if (!canSpellWord(upper, availableMap)) continue;

    const indices = assignIndices(upper, availableMap, ownership, board);
    if (!indices) continue;

    const hasNewTile = indices.some((i) => ownership[i] !== "computer");
    if (!hasNewTile) continue;

    samples += 1;

    // Simple scoring: prefer shorter words and mild steal bonus (no lock hunting)
    let score = word.length;
    for (const i of indices) {
      if (ownership[i] === "player") score += 1;
    }

    if (score > bestScore) {
      bestScore = score;
      bestResult = { word: upper, indices };
    }
  }

  return bestResult;
}
