import { capitalize } from "./js-file";
import { reverseString } from "./js-file";
import { add } from "./js-file";
import { subtract } from "./js-file";
import { multiply } from "./js-file";
import { divide } from "./js-file";
import { caesarCipher } from "./js-file";
import { analyzeArray } from "./js-file";

// 1. capitalize
test('first character of string is capitalized', () => {
  expect(capitalize('test')).toBe('Test');
});

// 2. reverseString
test('string is reversed', () => {
  expect(reverseString('test')).toBe('tset');
});

test('works with multiple words', () => {
  expect(reverseString('test me')).toBe('em tset');
});


// 3. calculator: add, subtract, multiply, divide
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});
test('works with negatives -1 - (-2) = 1', () => {
  expect(subtract(-1, -2)).toBe(1);
});

test('multiply 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});

test('multiply 3 / 2 to equal 1.5', () => {
  expect(divide(3, 2)).toBe(1.5);
});

// 4. ceaserCipher
test('run cipher, turn hello to ifmmp', () => {
  expect(caesarCipher('hello')).toBe('ifmmp');
});

// 5. analyzeArray
