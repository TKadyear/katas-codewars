import {test,describe} from "node:test";
import { whoLikes } from "./wholikes.js";

describe('Who likes ', () => {
  test('If no one likes this', () => {
    expect(whoLikes([])).toBe("no one likes this");
  });
  test('If someone likes this', () => {
    expect(whoLikes(['Gema'])).toBe("Gema likes this");
  });
  test('If 2 persons likes this', () => {
    expect(whoLikes(['Gema', 'Sofía'])).toBe("Gema and Sofía like this");
  });
  test('If 3 persons likes this', () => {
    expect(whoLikes(['Gema', 'Sofía', 'Lucía'])).toBe("Gema, Sofía and Lucía like this");
  });
  test('If more than 4 persons likes this', () => {
    const namesPeople = ['Gema', 'Sofía', 'Lucía', 'David'];
    expect(whoLikes(namesPeople)).toBe(`${namesPeople[0]}, ${namesPeople[1]} and ${namesPeople.length - 2} others like this`);
  });
});
