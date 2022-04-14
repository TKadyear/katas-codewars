const decoderRomanNumerals = (roman) => {
  const decoder = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1_000
  }
  const slicesRoman = roman.match(/./g)
  return slicesRoman.map(num => decoder[num]).reduce((prev, curr) => prev + curr);
};

module.exports = decoderRomanNumerals;
