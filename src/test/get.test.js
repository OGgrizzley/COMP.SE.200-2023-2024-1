var get = require('../src/get.js')

describe('get', () => {
    it('should return the value of a property', () => {
        expect(get({ 'a': [{ 'b': { 'c': 3 } }, 4] }, 'a[0].b.c')).toBe(3);
    });
});

describe('get', () => {
    it('should return the value of a property using array path', () => {
      expect(get({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', '0', 'b', 'c'])).toBe(3);
    });
  
    it('should return default value if property is not found', () => {
      expect(get({ 'a': [{ 'b': { 'c': 3 } }] }, 'a.b.d', 'default')).toBe('default');
    });
  
    it('should return default value if property is undefined', () => {
      expect(get({ 'a': [{ 'b': { 'c': undefined } }] }, 'a[0].b.c', 'default')).toBe('default');
    });
  
    it('should return undefined if object is null', () => {
      expect(get(null, 'a[0].b.c')).toBeUndefined();
    });
  
    it('should return undefined if object is undefined', () => {
      expect(get(undefined, 'a[0].b.c')).toBeUndefined();
    });
  
    it('should return defaultValue if object is null and defaultValue is provided', () => {
      expect(get(null, 'a[0].b.c', 'default')).toBe('default');
    });
  
    it('should return defaultValue if object is undefined and defaultValue is provided', () => {
      expect(get(undefined, 'a[0].b.c', 'default')).toBe('default');
    });
  
    it('should return value from nested arrays using array path', () => {
      expect(get({ 'a': [[{ 'b': { 'c': 5 } }]] }, ['a', '0', '0', 'b', 'c'])).toBe(5);
    });
  });
  