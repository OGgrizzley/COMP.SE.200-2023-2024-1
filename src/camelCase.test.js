import camelCase from './camelCase.js';
import upperFirst from './upperFirst.js';
import words from './words.js';

describe('camelCase', () => {
  test('should convert space-separated words to camel case', () => {
    const result = camelCase('Foo Bar');
    expect(result.trim()).toBe('fooBar');
  });

  test('should handle dashed strings and convert to camel case', () => {
    const result = camelCase('--foo-bar--');
    expect(result.trim()).toBe('fooBar');
  });

  test('should handle underscore-separated strings and convert to camel case', () => {
    const result = camelCase('__FOO_BAR__');
    expect(result.trim()).toBe('fooBar');
  });

  test('should handle strings with apostrophes and convert to camel case', () => {
    const result = camelCase("I can't believe it's working");
    expect(result.trim()).toBe("iCantBelieveItsWorking");
  });

  test('should handle empty string and return empty string', () => {
    const result = camelCase('');
    expect(result.trim()).toBe('');
  });


  test('should properly capitalize the first word with upperFirst', () => {
    const result = upperFirst('word');
    expect(result).toBe('Word');
  });

  test('should split words correctly with words function', () => {
    const result = words('Hello World');
    expect(result).toEqual(['Hello', 'World']);
  });
});