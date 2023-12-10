var at = require('../src/at.js')

describe('at', () => {
    it('should return an array of values corresponding to paths of object', () => {
        expect(at({ 'a': [{ 'b': { 'c': 3 } }, 4] }, ['a[0].b.c', 'a[1]'])).toBe([3, 4]);
    });
});

describe('at', () => {
    it('should return an empty array if object is null', () => {
        expect(at(null, ['a[0].b.c', 'a[1]'])).toBe([]);
    });
});

describe('at', () => {
    it('should return an empty array if object is undefined', () => {
        expect(at(undefined, ['a[0].b.c', 'a[1]'])).toBe([]);
    });
});

describe('at', () => {
    it('should return an empty array if object is an empty object', () => {
        expect(at({}, ['a[0].b.c', 'a[1]'])).toBe([]);
    });
});

describe('at', () => {
    it('should return an empty array if object is an empty array', () => {
        expect(at([], ['a[0].b.c', 'a[1]'])).toBe([]);
    });
});

describe('at', () => {
    it('should return an empty array if object is a string', () => {
        expect(at("string", ['a[0].b.c', 'a[1]'])).toBe([]);
    });
});

describe('at', () => {
    it('should return an empty array if object is a number', () => {
        expect(at(1, ['a[0].b.c', 'a[1]'])).toBe([]);
    });
});

describe('at', () => {
    it('should return an empty array if object is a boolean', () => {
        expect(at(true, ['a[0].b.c', 'a[1]'])).toBe([]);
    });
});