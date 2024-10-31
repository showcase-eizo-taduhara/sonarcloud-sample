// test/index.test.js
const Calculator = require('../src/index');
let calc;

beforeEach(() => {
    calc = new Calculator();
});

describe('Calculator class tests', () => {

    test('add() should add two numbers correctly', () => {
        expect(calc.add(5, 3)).toBe(8);
    });

    test('add2() should add two numbers correctly', () => {
        expect(calc.add2(5, 3, 8)).toBe(16);
    });

    test('subtract() should subtract two numbers correctly', () => {
        expect(calc.subtract(5, 3)).toBe(2);
    });

    test('multiply() should multiply two numbers correctly', () => {
        expect(calc.multiply(5, 3)).toBe(15);
    });

    test('divide() should divide two numbers correctly', () => {
        expect(calc.divide(6, 3)).toBe(2);
    });

    test('divide() should throw error when dividing by zero', () => {
        expect(() => calc.divide(5, 0)).toThrow("ゼロで割ることはできません");
    });

    test('power() should calculate power correctly', () => {
        expect(calc.power(2, 3)).toBe(8);
    });

    test('absolute() should return absolute value', () => {
        expect(calc.absolute(-5)).toBe(5);
    });

    test('squareRoot() should calculate square root correctly', () => {
        expect(calc.squareRoot(9)).toBe(3);
    });

    test('squareRoot() should throw error for negative input', () => {
        expect(() => calc.squareRoot(-9)).toThrow("負の数の平方根は計算できません");
    });

    test('logarithm() should calculate natural logarithm correctly', () => {
        expect(calc.logarithm(Math.E)).toBeCloseTo(1, 5);
    });

    test('logarithm() should throw error for non-positive input', () => {
        expect(() => calc.logarithm(0)).toThrow("対数は正の数でのみ計算できます");
    });

    test('root() should calculate nth root correctly', () => {
        expect(calc.root(27, 3)).toBe(3);
    });

    test('root() should throw error for invalid root degree', () => {
        expect(() => calc.root(27, -2)).toThrow("根の次数は正の数である必要があります");
    });

    test('sum() should calculate sum of multiple numbers', () => {
        expect(calc.sum(1, 2, 3, 4)).toBe(10);
    });

    test('average() should calculate average of multiple numbers', () => {
        expect(calc.average(1, 2, 3, 4)).toBe(2.5);
    });

    test('average() should throw error when no numbers are provided', () => {
        expect(() => calc.average()).toThrow("値が必要です");
    });

    test('reset() should reset result to 0', () => {
        calc.result = 10;
        calc.reset();
        expect(calc.result).toBe(0);
    });
});
