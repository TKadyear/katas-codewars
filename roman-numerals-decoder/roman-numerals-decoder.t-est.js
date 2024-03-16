import { test, describe } from "node:test";
import  assert  from "node:assert";
import { decoderRomanNumerals } from "./roman-numerals-decoder.js";

describe('Roman-numerals', () => {
  test('One', () => {
    assert.equal(decoderRomanNumerals('I'), 1);
  })
  test('Two', () => {
    assert.equal(decoderRomanNumerals('II'), 2);
  })
  test('Three', () => {
    assert.equal(decoderRomanNumerals('III'), 3);
  })
  test('Four', () => {
    assert.equal(decoderRomanNumerals('IV'), 4);
  })
  test('Five', () => {
    assert.equal(decoderRomanNumerals('V'), 5);
  })
  test('Six', () => {
    assert.equal(decoderRomanNumerals('VI'), 6);
  })
  test('Seven', () => {
    assert.equal(decoderRomanNumerals('VII'), 7);
  })
  test('Eight', () => {
    assert.equal(decoderRomanNumerals('VIII'), 8);
  })
  test('Nine', () => {
    assert.equal(decoderRomanNumerals('IX'), 9);
  })
  test('Ten', () => {
    assert.equal(decoderRomanNumerals('X'), 10);
  })
})

describe('Larger numbers to 11 to 50', () => {
  test('Ten', () => {
    assert.equal(decoderRomanNumerals('XI'), 11);
  })
  test('Fity', () => {
    assert.equal(decoderRomanNumerals('L'), 50);
  })

})
describe('Larger numbers to 50 to 500', () => {
  test('One Hundred ', () => {
    assert.equal(decoderRomanNumerals('C'), 100);
  })
  test('Five Hundred', () => {
    assert.equal(decoderRomanNumerals('D'), 500);
  })
  test('One Thousand', () => {
    assert.equal(decoderRomanNumerals('M'), 1000);
  })
})
describe('Complex Larger numbers', () => {
  test('899', () => {
    assert.equal(decoderRomanNumerals('DCCCXCIX'), 899);
  })
  test('1990', () => {
    assert.equal(decoderRomanNumerals('MCMXC'), 1990);
  })
  test('2007', () => {
    assert.equal(decoderRomanNumerals('MMVII'), 2007);
  })
  test('2008', () => {
    assert.equal(decoderRomanNumerals('MMVIII'), 2008);
  })
  test('2546', () => {
    assert.equal(decoderRomanNumerals('MMDXLVI'), 2546);
  })
})
