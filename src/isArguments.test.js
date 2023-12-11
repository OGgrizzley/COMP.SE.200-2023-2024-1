import { expect } from 'chai';
import isArguments from './isArguments.js';

describe('isArguments', () => {
  it('should return false for a function with arguments', () => {
    
    expect(isArguments(function() { return arguments; })).to.be.false;
  });

  it('should return false for an array', () => {
    expect(isArguments([1, 2, 3])).to.be.false;
  });

  it('should return false for an object', () => {
    expect(isArguments({ key: 'value' })).to.be.false;
  });

  it('should return false for a string', () => {
    expect(isArguments('arguments')).to.be.false;
  });

  it('should return false for a number', () => {
    expect(isArguments(123)).to.be.false;
  });

  it('should return false for an empty function', () => {
    expect(isArguments(function() {})).to.be.false;
  });

  it('should return false for null', () => {
    expect(isArguments(null)).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isArguments(undefined)).to.be.false;
  });

  it('should return false for a boolean', () => {
    expect(isArguments(true)).to.be.false;
  });

  it('should return false for a custom object with arguments Symbol', () => {
    // Assume it always returns false for a custom object with arguments Symbol
    const customObject = { [Symbol.for('arguments')]: 'test' };
    expect(isArguments(customObject)).to.be.false;
  });
});
