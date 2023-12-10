import at from './at'; // Import the function to be tested

describe('at function', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

  test('picks values from object using paths', () => {
    // Test if 'at' function retrieves values from the object based on paths provided
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  });

  test('handles empty paths', () => {
    // Test if 'at' function handles empty paths gracefully
    expect(at(object)).toEqual([]);
  });

  test('picks values from nested objects', () => {
    // Test if 'at' function correctly picks values from deeply nested objects
    const nestedObject = { 'a': { 'b': { 'c': { 'd': 5 } } } };
    expect(at(nestedObject, 'a.b.c.d')).toEqual([5]);
  });

  test('returns undefined for non-existent paths', () => {
    // Test if 'at' function returns undefined for non-existent paths in the object
    expect(at(object, 'x.y.z')).toEqual([undefined]);
  });

  test('handles non-string paths', () => {
    // Test if 'at' function handles non-string paths provided
    expect(at(object, ['a', 1])).toEqual(['a', undefined]);
  });

  test('handles non-object input', () => {
    // Test if 'at' function gracefully handles non-object input for the object parameter
    const nonObject = 'not an object';
    expect(at(nonObject, 'some.path')).toEqual([]);
  });

  test('handles array input', () => {
    // Test if 'at' function correctly handles array input for the object parameter
    const arrayInput = ['a', 'b', 'c'];
    expect(at(arrayInput, [0, 2])).toEqual(['a', 'c']);
  });

  // You can add more tests here to cover other scenarios or edge cases
});
