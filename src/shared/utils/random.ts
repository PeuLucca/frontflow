export function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function pickRandomUnique<T>(items: T[], count: number): T[] {
  return shuffle(items).slice(0, Math.min(count, items.length));
}

export function randomInRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

export function weightedRandomPick<T>(items: T[], weights: number[]): T {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let remaining = Math.random() * total;

  for (let i = 0; i < items.length; i++) {
    remaining -= weights[i];
    if (remaining <= 0) return items[i];
  }

  return items[items.length - 1];
}
