import { test, describe } from "node:test";
import assert from "node:assert";
import { whoLikes } from "./wholikes.js";

describe('Who likes ', () => {
  test('If no one likes this', () => {
    assert.equal(whoLikes([]), "no one likes this");
  });
  test('If someone likes this', () => {
    assert.equal(whoLikes(['Gema']),"Gema likes this");
  });
  test('If 2 persons likes this', () => {
    assert.equal(whoLikes(['Gema', 'Sofía']),"Gema and Sofía like this");
  });
  test('If 3 persons likes this', () => {
    assert.equal(whoLikes(['Gema', 'Sofía', 'Lucía']),"Gema, Sofía and Lucía like this");
  });
  test('If more than 4 persons likes this', () => {
    const namesPeople = ['Gema', 'Sofía', 'Lucía', 'David'];
    assert.equal(whoLikes(namesPeople),`${namesPeople[0]}, ${namesPeople[1]} and ${namesPeople.length - 2} others like this`);
  });
});
