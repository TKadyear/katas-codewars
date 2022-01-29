const createPhoneNumber = require('./create-phone-number')
describe('Phone Number', () => {
  test('List of nine Numbers', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual('(123) 456-7890');
  })
  // test('If some of the numbers is bigger than 9', () => {
  //   expect(createPhoneNumber([1, 2, 3, 40, 5, 6, 7, 8, 9, 0])).toEqual('Invalid Phone Number');;
  // })
  // test('If length of the list numbers is bigger than 9', () => {
  //   expect(createPhoneNumber([1, 2, 3, 40, 5, 6, 7, 8, 9, 0])).toEqual('Phone Number have 9 digits');;
  // })
  // test('If the list has a String or other format', () => {
  //   expect(createPhoneNumber([1, 't', 3, 4, 5, 6, 7, 8, 9, 0])).toEqual('Invalid Phone Number');
  //   expect(createPhoneNumber([1, function () { }, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual('Invalid Phone Number');
  //   expect(createPhoneNumber([1, {}, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual('Invalid Phone Number');
  //   expect(createPhoneNumber([1, [], 3, 4, 5, 6, 7, 8, 9, 0])).toEqual('Invalid Phone Number');
  // })
})
