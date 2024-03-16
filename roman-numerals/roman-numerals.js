function divideInPartsNumber(number) {
  number = number.toString();
  let partNum = [];
  for (let i = 0; i < number.length; i++) {
    partNum.push(number[i].padEnd(number.length - i, 0))
  }
  return partNum;
}
export function changeToRomanNumerals(num) {
  const romanNumerals = {
    1: { "1": "I", "5": "V" },
    2: { "1": "X", "5": "L" },
    3: { "1": "C", "5": "D" },
    4: { "1": "M" },
  }
  let NumberDivided = divideInPartsNumber(num);
  let roman = "";
  NumberDivided.forEach((number) => {
    let NUMBER = Number(number[0])
    if (NUMBER === 0) {
      return;
    }
    if (NUMBER != 5 && NUMBER != 1) {
      if (NUMBER != 4 && NUMBER != 9) {
        if (NUMBER > 5) {
          roman += romanNumerals[number.length]["5"]
          NUMBER = NUMBER - 5
        }
        for (let i = 0; i < NUMBER; i++) {
          roman += romanNumerals[number.length]["1"]
        }
      } else {
        const firstDigit = ((NUMBER + 1).toString())[0]
        const length = NUMBER === 4 ? number.length : number.length + 1;
        roman = roman + romanNumerals[number.length]["1"] + romanNumerals[length][firstDigit];
      }
    } else {
      roman += romanNumerals[number.length][number[0]]
    }
  });
  return roman;
}
