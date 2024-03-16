import { test, describe } from "node:test";
import { persistence } from "./persistent-bugger.js";

describe("Introduce only one digit", () => {
  test("Number 0", () => {
    expect(persistence(0)).toBe(0);
  });
  test("Number 1", () => {
    expect(persistence(1)).toBe(0);
  });
  test("Number 2", () => {
    expect(persistence(2)).toBe(0);
  });
  test("Number 3", () => {
    expect(persistence(3)).toBe(0);
  });
  test("Number 4", () => {
    expect(persistence(4)).toBe(0);
  });
  test("Number 5", () => {
    expect(persistence(5)).toBe(0);
  });
  test("Number 6", () => {
    expect(persistence(6)).toBe(0);
  });
  test("Number 7", () => {
    expect(persistence(7)).toBe(0);
  });
  test("Number 8", () => {
    expect(persistence(8)).toBe(0);
  });
  test("Number 9", () => {
    expect(persistence(9)).toBe(0);
  });
})
describe("Introduce other values", () => {
  test("Number 39", () => {
    expect(persistence(39)).toBe(4);
  });
  test("Number 999", () => {
    expect(persistence(999)).toBe(2);
  });
  test("Number 459", () => {
    expect(persistence(459)).toBe(0);
  });
  test("Number 678", () => {
    expect(persistence(678)).toBe(0);
  });
  test("Number 49856935", () => {
    expect(persistence(49856935)).toBe(0);
  });
  test("Number 2506739", () => {
    expect(persistence(2506739)).toBe(0);
  });

})
