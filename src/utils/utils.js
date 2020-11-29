export function handleMillion(num) {
  return Math.floor(num / 1e4) > 0 ? Math.floor(num / 1e4) : num
}

export function realPx(px) {
  const maxWidth = window.innerWidth > 420 ? 420 : window.innerWidth
  return px * (maxWidth / 375)
}