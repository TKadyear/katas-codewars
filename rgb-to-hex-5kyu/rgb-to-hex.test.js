const { hexConversion } = require("./rgb-to-hex")

describe("RGB color in range 0 to 255", () => {
  test('case 1', () => {
    expect(hexConversion(255, 255, 255)).toEqual("FFFFFF")
  })
  test('case 2', () => {
    expect(hexConversion(0, 0, 0)).toEqual("000000")
  })
  test('case 3', () => {
    expect(hexConversion(148, 0, 211)).toEqual("9400D3")
  })
})
describe("RGB color more than 255", () => {
  test('case 1', () => {
    expect(hexConversion(255, 255, 300)).toEqual("FFFFFF")
  })
})
