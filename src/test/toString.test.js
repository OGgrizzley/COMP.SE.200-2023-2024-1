var toString = require('../src/toString.js')


describe('toString', () => {
  it('should convert null and undefined to an empty string', () => {
    expect(toString(null)).toBe('');
    expect(toString(undefined)).toBe('');
  });

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).toBe('-0');
  });

  it('should convert arrays to strings', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString(['a', 'b', 'c'])).toBe('a,b,c');
    expect(toString([])).toBe('');
    expect(toString([null, undefined])).toBe(',');
    expect(toString([[1, 2], [3, 4]])).toBe('1,2,3,4');
  });

  it('should convert symbols to their string representation', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).toBe(symbol.toString());
  });

  it('should handle numbers and other values', () => {
    expect(toString(123)).toBe('123');
    expect(toString('abc')).toBe('abc');
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
    expect(toString({ a: 1, b: 2 })).toBe('[object Object]');
  });

  it('should handle edge cases', () => {
    expect(toString(NaN)).toBe('NaN');
    expect(toString(Infinity)).toBe('Infinity');
    expect(toString(-Infinity)).toBe('-Infinity');
  });
});
