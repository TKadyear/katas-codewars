import { test, describe } from "node:test";
import { bankersPlan } from "./bankersplan.js";

describe('Banking Plan', () => {
  test('Plan 1', () => {
    expect(bankersPlan(100000, 1, 2000, 15, 1)).toBeTruthy();
  })
  test('Plan 2', () => {
    expect(bankersPlan(100000, 1, 10000, 10, 1)).toBeTruthy();
  })
  test('Plan 3', () => {
    expect(bankersPlan(100000, 1, 9185, 12, 1)).toBeFalsy();
  })

})
