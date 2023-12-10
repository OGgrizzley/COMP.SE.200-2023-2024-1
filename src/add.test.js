import add from './add.js';

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number', () => {
    expect(add(-5, 8)).toBe(3);
  });

  test('adds two negative numbers', () => {
    expect(add(-3, -7)).toBe(-10);
  });

  test('adds a positive number and zero', () => {
    expect(add(4, 0)).toBe(4);
  });

  test('adds zero and a negative number', () => {
    expect(add(0, -6)).toBe(-6);
  });

  test('adds zero and zero', () => {
    expect(add(0, 0)).toBe(0);
  });

  describe('add error cases', () => {
    test('string with number', () => {
      expect(() => add("1", 2)).toThrowError();
    });

    test('number with string', () => {
      expect(() => add(1, "2")).toThrowError();
    });
  });
});
