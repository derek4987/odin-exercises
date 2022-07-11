// 1. A capitalize function that takes a string and returns it with the first character capitalized
function capitalize(string) {
    if (typeof string === 'string') {
        const firstL = string.slice(0, 1).toUpperCase();
        const remaining = string.slice(1);
        const result = firstL.concat(remaining);
        return result;
    } else {
        alert('please enter a string');
    }
}

// 2. A reverseString function that takes a string and returns it reversed.
function reverseString(string) {
    if (typeof string === 'string') {
        const splitString = string.split('');
        const reverseArray = splitString.reverse();
        const reverseString = reverseArray.join('');
        return reverseString;    
    } else {
        alert('please enter a string');
    }
}

/* 3. A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. 
Each of these functions should take two numbers and return the correct calculation. */
function add(a, b) {
    return a + b;
}

function subtract(a, b, c) {
    return a - b - c;
}

function multiply(a, b) {

}

function divide(a, b) {

}

// 4. A caesarCipher function that takes a string and returns it with each character “shifted”.
function caesarCipher(string) {

}

/* 5. An analyzeArray function that takes an array of numbers and returns an object with the following 
properties: average, min, max, and length. */
function analyzeArray(array) {

}

export {
        capitalize,
        reverseString, 
        add,
        subtract,
        multiply,
        divide,
        caesarCipher,
        analyzeArray
    };