import { test, describe } from "node:test";
import  assert  from "node:assert";
import { changeToRomanNumerals } from "./roman-numerals.js";

describe('Roman-numerals', () => {
  test('One', () => {
    assert.equal(changeToRomanNumerals(1), 'I');
  })
  test('Two', () => {
    assert.equal(changeToRomanNumerals(2), 'II');
  })
  test('Three', () => {
    assert.equal(changeToRomanNumerals(3), 'III');
  })
  test('Four', () => {
    assert.equal(changeToRomanNumerals(4), 'IV');
  })
  test('Five', () => {
    assert.equal(changeToRomanNumerals(5), 'V');
  })
  test('Six', () => {
    assert.equal(changeToRomanNumerals(6), 'VI');
  })
  test('Seven', () => {
    assert.equal(changeToRomanNumerals(7), 'VII');
  })
  test('Eight', () => {
    assert.equal(changeToRomanNumerals(8), 'VIII');
  })
  test('Nine', () => {
    assert.equal(changeToRomanNumerals(9), 'IX');
  })
  test('Ten', () => {
    assert.equal(changeToRomanNumerals(10), 'X');
  })
})

describe('Larger numbers to 11 to 50', () => {
  test('Ten', () => {
    assert.equal(changeToRomanNumerals(11), 'XI');
  })
  test('Fity', () => {
    assert.equal(changeToRomanNumerals(50), 'L');
  })

})
describe('Larger numbers to 50 to 500', () => {
  test('One Hundred ', () => {
    assert.equal(changeToRomanNumerals(100), 'C');
  })
  test('Five Hundred', () => {
    assert.equal(changeToRomanNumerals(500), 'D');
  })
  test('One Thousand', () => {
    assert.equal(changeToRomanNumerals(1000), 'M');
  })
})
describe('Complex Larger numbers', () => {
  test('899', () => {
    assert.equal(changeToRomanNumerals(899), 'DCCCXCIX');
  })
  test('1990', () => {
    assert.equal(changeToRomanNumerals(1990), 'MCMXC');
  })
  test('2007', () => {
    assert.equal(changeToRomanNumerals(2007), 'MMVII');
  })
  test('2008', () => {
    assert.equal(changeToRomanNumerals(2008), 'MMVIII');
  })
  test('2546', () => {
    assert.equal(changeToRomanNumerals(2546), 'MMDXLVI');
  })
})
