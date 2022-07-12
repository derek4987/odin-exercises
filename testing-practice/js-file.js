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

function subtract(a, b) {
    return (a - (b));
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return parseFloat(a / b);
}

// 4. A caesarCipher function that takes a string and returns it with each character “shifted”.
function caesarCipher(string) {
    const alphabet = ['a','b','c','d','e','f','g','h',"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let newString = '';
    for (let i=0; i<string.length; i++) {
        let letter = string[i];
        for (let j=0; j<alphabet.length; j++) {
            if (letter === alphabet[j]) {
                let newLetter = alphabet[j+1];
                newString = newString.concat(newLetter);
            } else continue;
        } break
    }
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