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

// 4. ceaserCipher


// 5. analyzeArray
