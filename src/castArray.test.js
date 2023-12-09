import castArray from './castArray.js';

describe('castArray', () => {
  it('should cast a non-array value to an array', () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
    expect(castArray('abc')).toEqual(['abc']);
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
    expect(castArray()).toEqual([]);
  });

  it('should return the same array if the input is already an array', () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);
  });
});
