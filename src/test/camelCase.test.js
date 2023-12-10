var camelCase = require('../src/camelCase.js')

describe('camelCase', () => {
  it('should convert string to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
    expect(camelCase('--foo-bar--')).toBe('fooBar');
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  it('should handle various separator characters', () => {
    expect(camelCase('foo bar')).toBe('fooBar');
    expect(camelCase('fooBar')).toBe('fooBar');
    expect(camelCase('FOO_BAR')).toBe('fooBar');
    expect(camelCase('foo-bar')).toBe('fooBar');
    expect(camelCase('foo_bar')).toBe('fooBar');
  });

  it('should handle numbers in the string', () => {
    expect(camelCase('foo123bar')).toBe('foo123bar');
    expect(camelCase('foo 123 bar')).toBe('foo123Bar');
    expect(camelCase('123foo456')).toBe('123foo456');
  });

  it('should handle empty strings and edge cases', () => {
    expect(camelCase('')).toBe('');
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
  });
});
