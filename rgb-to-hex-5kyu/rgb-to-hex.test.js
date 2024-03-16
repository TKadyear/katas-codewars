import { test, describe } from "node:test";
import { hexConversion } from "./rgb-to-hex.js";

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
  test('case 3', () => {
    expect(hexConversion(173, 255, 47)).toEqual("ADFF2F")
  })
})
describe("RGB color more than 255 or less than 0", () => {
  test('More than 255', () => {
    expect(hexConversion(255, 255, 300)).toEqual("FFFFFF")
  })
  test('Less than 0', () => {
    expect(hexConversion(0, 0, -20)).toEqual("000000")
  })
})
