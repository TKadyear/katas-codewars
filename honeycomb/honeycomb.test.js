import { test, describe } from "node:test";
import assert from "node:assert";
import { honeycombStructure } from "./honeycomb.js";

describe("HoneyComb", () => {
  test("Number 5", () => {
    assert.deepStrictEqual(honeycombStructure(5),[1,3,1]);
  });
  test("Number 7", () => {

    assert.deepStrictEqual(honeycombStructure(7),[2,3,2]);
  });
  test("Number 14", () => {
/*
aa
aaa
aaaa
aaa
aa
*/

assert.deepStrictEqual(honeycombStructure(14),[2,3,4,3,2]);
});
  test("Number 19", () => {
    assert.deepStrictEqual(honeycombStructure(19),[3, 4, 5, 4, 3]);
  });
})

    /*
5
[1,1,1,1,1]
[1,3,1]
    */
    /*
7
[1,1,1,1,1,1,1]
[1,3,1]
    */
