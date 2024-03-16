import { test, describe } from "node:test";
import  assert  from "node:assert";
import { persistence } from "./persistent-bugger.js";

describe("Introduce only one digit", () => {
  test("Number 0", () => {
    assert.equal(persistence(0), 0);
  });
  test("Number 1", () => {
    assert.equal(persistence(1), 0);
  });
  test("Number 2", () => {
    assert.equal(persistence(2), 0);
  });
  test("Number 3", () => {
    assert.equal(persistence(3), 0);
  });
  test("Number 4", () => {
    assert.equal(persistence(4), 0);
  });
  test("Number 5", () => {
    assert.equal(persistence(5), 0);
  });
  test("Number 6", () => {
    assert.equal(persistence(6), 0);
  });
  test("Number 7", () => {
    assert.equal(persistence(7), 0);
  });
  test("Number 8", () => {
    assert.equal(persistence(8), 0);
  });
  test("Number 9", () => {
    assert.equal(persistence(9), 0);
  });
})
describe("Introduce other values", () => {
  test("Number 39", () => {
    assert.equal(persistence(39), 4);
  });
  test("Number 999", () => {
    assert.equal(persistence(999), 2);
  });
  test("Number 459", () => {
    assert.equal(persistence(459), 0);
  });
  test("Number 678", () => {
    assert.equal(persistence(678), 0);
  });
  test("Number 49856935", () => {
    assert.equal(persistence(49856935), 0);
  });
  test("Number 2506739", () => {
    assert.equal(persistence(2506739), 0);
  });

})
