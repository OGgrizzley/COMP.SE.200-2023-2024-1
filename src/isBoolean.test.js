import isBoolean from './isBoolean.js';

describe('isBoolean', () => {
    it('should return true for true', () => {
      expect(isBoolean(true)).toBe(true);
    });
  
    it('should return true for false', () => {
      expect(isBoolean(false)).toBe(true);
    });
  
    it('should return false for null', () => {
      expect(isBoolean(null)).toBe(false);
    });
  
    it('should return false for non-boolean values', () => {
      expect(isBoolean(0)).toBe(false);
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean({})).toBe(false);
    });
  
    it('should return true for boolean objects', () => {
      expect(isBoolean(new Boolean(true))).toBe(true);
      expect(isBoolean(new Boolean(false))).toBe(true);
    });
  
    it('should return false for non-boolean objects', () => {
      expect(isBoolean({ key: true })).toBe(false);
      expect(isBoolean({ key: false })).toBe(false);
    });
  });