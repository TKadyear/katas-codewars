function createPhoneNumber(numbers) {
  //(123) 423-123
  let phone = `(${[...numbers].slice(0, 3).join('')}) ${[...numbers].slice(3, 6).join('')}-${[...numbers].slice(6, 10).join('')}`
  return phone
}
module.exports = createPhoneNumber;
