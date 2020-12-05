export function handleMillion(num) {
  return Math.floor(num / 1e4) > 0 ? Math.floor(num / 1e4) : num
}

export function realPx(px) {
  const maxWidth = window.innerWidth > 420 ? 420 : window.innerWidth
  return px * (maxWidth / 375)
}

// 获得dom绑定的属性
export function getDataAttr(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
