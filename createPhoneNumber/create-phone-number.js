function createPhoneNumber(numbers) {
  //(123) 423-123
  if (numbers.includes(isNaN())) {
    return 'Invalid Phone Number'
  }
  if (numbers.length > 10) {
    return 'Phone Number must have only 9 digits'
  }
  const isAbove10 = (value) => value < 10
  if (numbers.every(isAbove10) && numbers.length === 10) {
    let phone = `(${[...numbers].slice(0, 3).join('')}) ${[...numbers].slice(3, 6).join('')}-${[...numbers].slice(6, 10).join('')}`
    return phone
  }
  // else {
  //   return 'Phone Number must have only 9 digits'
  // }
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
module.exports = createPhoneNumber;
