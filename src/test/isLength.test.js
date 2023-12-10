var isLength = require('../src/isLength.js');

describe('isLength', () => {
  it('should return true for valid array-like lengths', () => {
    expect(isLength(0)).toBe(true);
    expect(isLength(1)).toBe(true);
    expect(isLength(100)).toBe(true);
    expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true);
  });

  it('should return false for invalid array-like lengths', () => {
    expect(isLength(Number.MIN_VALUE)).toBe(false);
    expect(isLength(-1)).toBe(false);
    expect(isLength(-100)).toBe(false);
    expect(isLength(1.5)).toBe(false);
    expect(isLength(Infinity)).toBe(false);
    expect(isLength('3')).toBe(false);
    expect(isLength(null)).toBe(false);
    expect(isLength(undefined)).toBe(false);
    expect(isLength({ length: 5 })).toBe(false); // Not a number
    expect(isLength([1, 2, 3])).toBe(false); // Not a number
    expect(isLength(true)).toBe(false); // Not a number
    expect(isLength(false)).toBe(false); // Not a number
    expect(isLength(Symbol('test'))).toBe(false); // Not a number
    expect(isLength(() => {})).toBe(false); // Not a number
  });
});
