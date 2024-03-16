import { test, describe } from "node:test";
import  assert  from "node:assert";
import { bankersPlan } from "./bankersplan.js";

describe('Banking Plan', () => {
  test('Plan 1', () => {
    assert.ok(bankersPlan(100000, 1, 2000, 15, 1));
  })
  test('Plan 2', () => {
    assert.ok(bankersPlan(100000, 1, 10000, 10, 1));
  })
  test('Plan 3', () => {
    assert.equal(bankersPlan(100000, 1, 9185, 12, 1),false);
  })

})
