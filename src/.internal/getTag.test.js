// getTag.test.js
import getTag from './getTag';

test('getTag returns correct toStringTag for null', () => {
  const result = getTag(null);
  expect(result).toBe('[object Null]');
});

test('getTag returns correct toStringTag for undefined', () => {
  const result = getTag(undefined);
  expect(result).toBe('[object Undefined]');
});

test('getTag returns correct toStringTag for an object', () => {
  const result = getTag({ example: 'value' });
  expect(result).toBe('[object Object]');
});

test('getTag returns correct toStringTag for a string', () => {
  const result = getTag('Hello, Jest!');
  expect(result).toBe('[object String]');
});

// Add more test cases based on the types you want to test

