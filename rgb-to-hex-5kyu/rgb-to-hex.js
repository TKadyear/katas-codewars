function hexConversion(R, G, B) {
  const HEX = "0123456789ABCDEF"
  let conversionHEX = "";
  [R, G, B].forEach(value => {
    if (value > 255 || value < 0) {
      value = (value > 255) ? 255 : 0;
    }
    conversionHEX += (value === 255)
      ? "FF"
      : HEX[Math.floor(value / 16)] + HEX[Math.floor(value % 16)];
  })
  return conversionHEX;
}
module.exports = { hexConversion }
