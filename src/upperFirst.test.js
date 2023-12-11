import upperFirst from './upperFirst'; // Adjust the path accordingly

describe('upperFirst', () => {
  it('should convert the first character of a string to upper case', () => {
    // Existing test cases
    expect(upperFirst('hello')).toBe('Hello');
    expect(upperFirst('world')).toBe('World');
    expect(upperFirst('')).toBe('');

    // Additional test cases with valid strings
    expect(upperFirst('foo bar')).toBe('Foo bar');
    expect(upperFirst('123abc')).toBe('123abc');

    // Test case with a single character
    expect(upperFirst('a')).toBe('A');

    // Test case with a string of spaces
    expect(upperFirst('    leading spaces')).toBe('    leading spaces');
    expect(upperFirst('trailing spaces    ')).toBe('Trailing spaces    ');

    // Test case with special characters
    expect(upperFirst('@specialChar')).toBe('@specialChar');
  });
});
