import { expect } from 'chai';
import words from './words.js';

describe('words', () => {
  it('should return an array of words for a basic string', () => {
    expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles']);
  });

  it('should return an array of words with a custom separator', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
  });

  it('should return an empty array for an empty string', () => {
    expect(words('')).to.deep.equal([]);
  });

  it('should return an array of words for a string with numbers', () => {
    expect(words('abc123xyz456')).to.deep.equal(['abc', '123', 'xyz', '456']);
  });

  it('should return an array of words for a string with special characters', () => {
    expect(words('hello-world!@#$%^&*()')).to.deep.equal(['hello', 'world']);
  });

  it('should return an array of words for a string with Unicode characters', () => {
    expect(words('你好，世界')).to.deep.equal(['你好，世界']);
  });

  it('should return an array of words with a pattern for letters only', () => {
    expect(words('fred, barney, & pebbles', /[A-Za-z]+/g)).to.deep.equal(['fred', 'barney', 'pebbles']);
  });

  it('should return an array of words with a pattern for numbers only', () => {
    expect(words('abc123xyz456', /\d+/g)).to.deep.equal(['123', '456']);
  });

  it('should return an array of words with a pattern for special characters and numbers', () => {
    expect(words('abc123xyz456!@#$%^&*', /[\w]+/g)).to.deep.equal(['abc123xyz456']);
  });

  it('should return an array of words with a pattern for Unicode characters', () => {
    expect(words('你好，世界', /[\p{L}]+/gu)).to.deep.equal(['你好', '世界']);
  });
});
