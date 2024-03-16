import { test, describe } from "node:test";
import { changeToRomanNumerals } from "./roman-numerals.js";

describe('Roman-numerals', () => {
  test('One', () => {
    expect(changeToRomanNumerals(1)).toBe('I');
  })
  test('Two', () => {
    expect(changeToRomanNumerals(2)).toBe('II');
  })
  test('Three', () => {
    expect(changeToRomanNumerals(3)).toBe('III');
  })
  test('Four', () => {
    expect(changeToRomanNumerals(4)).toBe('IV');
  })
  test('Five', () => {
    expect(changeToRomanNumerals(5)).toBe('V');
  })
  test('Six', () => {
    expect(changeToRomanNumerals(6)).toBe('VI');
  })
  test('Seven', () => {
    expect(changeToRomanNumerals(7)).toBe('VII');
  })
  test('Eight', () => {
    expect(changeToRomanNumerals(8)).toBe('VIII');
  })
  test('Nine', () => {
    expect(changeToRomanNumerals(9)).toBe('IX');
  })
  test('Ten', () => {
    expect(changeToRomanNumerals(10)).toBe('X');
  })
})

describe('Larger numbers to 11 to 50', () => {
  test('Ten', () => {
    expect(changeToRomanNumerals(11)).toBe('XI');
  })
  test('Fity', () => {
    expect(changeToRomanNumerals(50)).toBe('L');
  })

})
describe('Larger numbers to 50 to 500', () => {
  test('One Hundred ', () => {
    expect(changeToRomanNumerals(100)).toBe('C');
  })
  test('Five Hundred', () => {
    expect(changeToRomanNumerals(500)).toBe('D');
  })
  test('One Thousand', () => {
    expect(changeToRomanNumerals(1000)).toBe('M');
  })
})
describe('Complex Larger numbers', () => {
  test('899', () => {
    expect(changeToRomanNumerals(899)).toBe('DCCCXCIX');
  })
  test('1990', () => {
    expect(changeToRomanNumerals(1990)).toBe('MCMXC');
  })
  test('2007', () => {
    expect(changeToRomanNumerals(2007)).toBe('MMVII');
  })
  test('2008', () => {
    expect(changeToRomanNumerals(2008)).toBe('MMVIII');
  })
  test('2546', () => {
    expect(changeToRomanNumerals(2546)).toBe('MMDXLVI');
  })
})
