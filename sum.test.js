const sum = require('./sum');

/**
 * Jest tests for sum.js
 *
 * Save this as /C:/Users/HP/maths/sum.test.js
 *
 * Assumes a sibling module `sum.js` exporting a function:
 *   module.exports = function sum(a, b) { ... }
 */


describe('sum', () => {
    test('adds two positive integers', () => {
        expect(sum(1, 2)).toBe(4);
    });

    test('adds negative numbers', () => {
        expect(sum(-1, -1)).toBe(-2);
    });

    test('adds floating point numbers (use toBeCloseTo for precision)', () => {
        expect(sum(1.2, 3.4)).toBeCloseTo(4.6);
    });

    test('throws for non-number inputs', () => {
        expect(() => sum('a', 1)).toThrow();
    });
});