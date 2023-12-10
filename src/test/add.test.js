var add = require('../src/add.js')
//Hola
describe('add', () => { 
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});

describe('add', () => {
    it('one negative and one positive', () => {
        expect(add(-1, 2)).toBe(1);
    });
});

describe('add', () => {
    it('one positive and one negative', () => {
        expect(add(1, -1)).toBe(0);
    });
});

describe('add', () => {
    it('0 + positive', () => {
        expect(add(0, 1)).toBe(1);
    });
});

describe('add', () => {
    it('positive + 0', () => {
        expect(add(1, 0)).toBe(1);
    });
});

describe('add', () => {
    it('0 + negative', () => {
        expect(add(0, -1)).toBe(-1);
    });
});

describe('add', () => {
    it('negative + 0', () => {
        expect(add(-1, 0)).toBe(-1);
    });
});

describe('add', () => {
    it('string with number', () => {
        expect(add("1", 2)).toThrowError();
    });
});

describe('add', () => {
    it('number with string', () => {
        expect(add(1, "2")).toThrowError();
    });
});
