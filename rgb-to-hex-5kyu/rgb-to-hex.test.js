import { test, describe } from "node:test";
import  assert  from "node:assert";
import { hexConversion } from "./rgb-to-hex.js";

describe("RGB color in range 0 to 255", () => {
  test('case 1', () => {
    assert.equal(hexConversion(255, 255, 255), "FFFFFF")
  })
  test('case 2', () => {
    assert.equal(hexConversion(0, 0, 0), "000000")
  })
  test('case 3', () => {
    assert.equal(hexConversion(148, 0, 211), "9400D3")
  })
  test('case 3', () => {
    assert.equal(hexConversion(173, 255, 47), "ADFF2F")
  })
})
describe("RGB color more than 255 or less than 0", () => {
  test('More than 255', () => {
    assert.equal(hexConversion(255, 255, 300), "FFFFFF")
  })
  test('Less than 0', () => {
    assert.equal(hexConversion(0, 0, -20), "000000")
  })
})
