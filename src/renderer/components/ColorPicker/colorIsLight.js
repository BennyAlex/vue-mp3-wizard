/* eslint no-bitwise: 0 */
const toRgb = (color) => {
  if (color[0] === '#') {
    color = color.substr(1)
  }
  if (color.length !== 6) return console.warn('color must have a length of 6 hex numbers')
  let r, g, b
  let rgb = parseInt(color, 16)   // convert rrggbb to decimal
  r = (rgb >> 16) & 0xff  // extract red
  g = (rgb >> 8) & 0xff  // extract green
  b = (rgb >> 0) & 0xff  // extract blue
  return {r: r, g: g, b: b}
}

export default function colorIsLight (color) {
  let rgb = toRgb(color) // https://www.w3.org/TR/AERT#color-contrast
  return ((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000) > 220 // w3 says 125, but we want to have more white circles
}
