import castArray from './castArray.js';

describe('castArray', () => {
  it('should cast a non-array value to an array', () => {
    expect(castArray(1)).toEqual([1]);
  });

  it('should not modify an existing array', () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);
  });

  it('should cast an object to an array with that object as the only element', () => {
    const obj = { 'a': 1 };
    expect(castArray(obj)).toEqual([obj]);
  });

  it('should cast a string to an array with that string as the only element', () => {
    expect(castArray('abc')).toEqual(['abc']);
  });

  it('should cast null to an array with null as the only element', () => {
    expect(castArray(null)).toEqual([null]);
  });

  it('should cast undefined to an array with undefined as the only element', () => {
    expect(castArray(undefined)).toEqual([undefined]);
  });

  it('should return an empty array if called without arguments', () => {
    expect(castArray()).toEqual([]);
  });
});
