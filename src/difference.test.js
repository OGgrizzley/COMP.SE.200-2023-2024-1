import difference from './difference.js';

describe('difference function', () => {
  it('should return the difference of two arrays', () => {
    const result = difference([2, 1], [2, 3]);
    expect(result).toEqual([1]);
  });

  it('should handle an empty array as input', () => {
    const result = difference([], [1, 2, 3]);
    expect(result).toEqual([]);
  });

  it('should handle multiple arrays and exclude values correctly', () => {
    const result = difference([1, 2, 3, 4], [2, 3], [3, 4]);
    expect(result).toEqual([1]);
  });

  it('should handle no values to exclude and return the original array', () => {
    const result = difference([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle non-array inputs gracefully', () => {
    const result = difference('not an array', [1, 2, 3]);
    expect(result).toEqual([]);
  });

});
