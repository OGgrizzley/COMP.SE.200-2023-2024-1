import slice from './slice.js';

describe('slice function', () => {
  it('should return an empty array when the input array is null or undefined', () => {
    expect(slice(null)).toEqual([]);
    expect(slice(undefined)).toEqual([]);
  });

  it('should slice the array from the start position', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 2)).toEqual([3, 4]);
  });

  it('should slice the array with both start and end positions', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, 1, 4)).toEqual([2, 3, 4]);
  });

  it('should handle negative start and end positions correctly', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, -3, -1)).toEqual([3, 4]);
  });

  it('should return an empty array if start is greater than or equal to end', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, 2, 2)).toEqual([]);
    expect(slice(array, 4, 2)).toEqual([]);
  });

  it('should handle negative start position that exceeds array length', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, -10)).toEqual(array);
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3, 4, 5];
    slice(array, 1, 3);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });
});
