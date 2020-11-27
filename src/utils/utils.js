export function handleMillion(num) {
  return Math.floor(num / 1e4) > 0 ? Math.floor(num / 1e4) : num
}
