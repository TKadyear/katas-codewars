export function hexConversion(R, G, B) {
  const HEX = "0123456789ABCDEF"
  let conversionHEX = "";
  [R, G, B].forEach(value => {
    const index = (isFirstDigit = true) => Math.floor(isFirstDigit ? value / 16 : value % 16)
    if (value > 255 || value < 0) {
      value = (value > 255) ? 255 : 0;
    }
    conversionHEX += (value === 255)
      ? "FF"
      : HEX[index()] + HEX[index(false)];
  })
  return conversionHEX;
}
