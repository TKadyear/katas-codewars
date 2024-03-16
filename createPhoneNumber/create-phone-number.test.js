import { test, describe } from "node:test";
import  assert  from "node:assert";
import { createPhoneNumber } from "./create-phone-number.js";

describe('Phone Number', () => {
  test('List of nine Numbers', () => {
    assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),'(123) 456-7890');
  })
})
