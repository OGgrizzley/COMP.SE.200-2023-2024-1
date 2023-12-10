import upperFirst from './upperFirst'; // Adjust the path accordingly

describe('upperFirst', () => {
  it('should convert the first character of string to upper case', () => {
    // Existing test cases

    // Add additional test cases with valid strings
    expect(upperFirst('foo bar')).toBe('Foo bar');
    expect(upperFirst('123abc')).toBe('123abc');
    expect(upperFirst('')).toBe('');
  });

});
