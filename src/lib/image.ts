export function img(local: string | undefined, fallbackQuery: string, w = 1200): string {
  if (local && local.trim().length > 0) return local;
  const q = encodeURIComponent(fallbackQuery);
  return `https://source.unsplash.com/${w}x${Math.round(w * 0.66)}/?${q}`;
}
