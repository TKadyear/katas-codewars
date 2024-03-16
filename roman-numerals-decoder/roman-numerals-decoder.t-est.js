const decoderRomanNumerals = require('./roman-numerals-decoder')
describe('Roman-numerals', () => {
  test('One', () => {
    expect(decoderRomanNumerals('I')).toBe(1);
  })
  test('Two', () => {
    expect(decoderRomanNumerals('II')).toBe(2);
  })
  test('Three', () => {
    expect(decoderRomanNumerals('III')).toBe(3);
  })
  test('Four', () => {
    expect(decoderRomanNumerals('IV')).toBe(4);
  })
  test('Five', () => {
    expect(decoderRomanNumerals('V')).toBe(5);
  })
  test('Six', () => {
    expect(decoderRomanNumerals('VI')).toBe(6);
  })
  test('Seven', () => {
    expect(decoderRomanNumerals('VII')).toBe(7);
  })
  test('Eight', () => {
    expect(decoderRomanNumerals('VIII')).toBe(8);
  })
  test('Nine', () => {
    expect(decoderRomanNumerals('IX')).toBe(9);
  })
  test('Ten', () => {
    expect(decoderRomanNumerals('X')).toBe(10);
  })
})

describe('Larger numbers to 11 to 50', () => {
  test('Ten', () => {
    expect(decoderRomanNumerals('XI')).toBe(11);
  })
  test('Fity', () => {
    expect(decoderRomanNumerals('L')).toBe(50);
  })

})
describe('Larger numbers to 50 to 500', () => {
  test('One Hundred ', () => {
    expect(decoderRomanNumerals('C')).toBe(100);
  })
  test('Five Hundred', () => {
    expect(decoderRomanNumerals('D')).toBe(500);
  })
  test('One Thousand', () => {
    expect(decoderRomanNumerals('M')).toBe(1000);
  })
})
describe('Complex Larger numbers', () => {
  test('899', () => {
    expect(decoderRomanNumerals('DCCCXCIX')).toBe(899);
  })
  test('1990', () => {
    expect(decoderRomanNumerals('MCMXC')).toBe(1990);
  })
  test('2007', () => {
    expect(decoderRomanNumerals('MMVII')).toBe(2007);
  })
  test('2008', () => {
    expect(decoderRomanNumerals('MMVIII')).toBe(2008);
  })
  test('2546', () => {
    expect(decoderRomanNumerals('MMDXLVI')).toBe(2546);
  })
})
