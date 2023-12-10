var upperFirst = require('../src/upperFirst.js')

import upperFirst from './upperFirst.js'; // Asegúrate de importar adecuadamente el módulo

describe('upperFirst', () => {
  it('should convert the first character of string to upper case', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
    expect(upperFirst('foo bar')).toBe('Foo bar');
    expect(upperFirst('123abc')).toBe('123abc');
    expect(upperFirst('')).toBe('');
  });

  it('should handle edge cases', () => {
    expect(upperFirst(null)).toBe('');
    expect(upperFirst(undefined)).toBe('');
    expect(upperFirst(123)).toBe('123');
    expect(upperFirst([])).toBe('');
  });
});


