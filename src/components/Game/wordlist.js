// wordlist.js — Loads the full enable1 English dictionary (~172k words) at runtime.
// Fetched once and held in memory; subsequent games in the same session reuse the cached Set.

const ENABLE1_URL =
  'https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt';

let cachedWordSet = null;

export async function fetchWordList() {
  if (cachedWordSet) return cachedWordSet;
  const res = await fetch(ENABLE1_URL);
  if (!res.ok) throw new Error(`Failed to fetch wordlist: ${res.status}`);
  const text = await res.text();
  cachedWordSet = new Set(text.split('\n').map(w => w.trim().toLowerCase()).filter(Boolean));
  return cachedWordSet;
}
