const whoLikes = require('./wholikes');

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
    const listPersonLikes = ['Gema', 'Sofía', 'Lucía', 'David'];
    expect(whoLikes(listPersonLikes)).toBe(`${listPersonLikes[0]}, ${listPersonLikes[1]} and ${listPersonLikes.length - 2} others like this`);
  });
});
