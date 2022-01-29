const whoLikes = require('./wholikes');

describe('minMaxArray', () => {
  test('If no one likes this', () => {
    expect(whoLikes([])).toBe("No one like this");
  });
  test('If someone likes this', () => {
    expect(whoLikes(['Gema'])).toBe("Gema likes this");
  });
  test('If 2 persons likes this', () => {
    expect(whoLikes(['Gema', 'Sofía'])).toBe("Gema and Sofía likes this");
  });
  test('If 3 persons likes this', () => {
    expect(whoLikes(['Gema', 'Sofía', 'Lucía'])).toBe("Gema, Sofía and Lucía likes this");
  });
  test('If more than 4 persons likes this', () => {
    const listPersonLikes = ['Gema', 'Sofía', 'Lucía', 'David'];
    expect(whoLikes(listPersonLikes)).toBe(`${listPersonLikes[0]}, ${listPersonLikes[1]} and ${listPersonLikes.length - 2} others likes this`);
  });
});
