function hexConversion(R, G, B) {
  const HEX = "0123456789ABCDEF"
  let conversionHEX = "";
  [R, G, B].forEach(value => conversionHEX += (value >= 255)
    ? "FF"
    : HEX[Math.floor(value / 16)] + value % 16
  )
  return conversionHEX;
}
module.exports = { hexConversion }
