/*
    Implement an algorithm to determine if a string has all unique characters. 
    What if you cannot use additional data structures?
*/

// using an object
function allUniqueCharsWithObject(str) {
    let dictionary = {};
    for (let i = 0; i < str.length; i++) {
        if (dictionary[str[i]]) {
            return false; // if match, return false
        } else {
            dictionary[str[i]] = true;
        }
    }
    return true; // if no match, return true
}

// O(n^2) approach, no additional data structures used
// for each character, check remaining characters for duplicates
function allUniqueChars(string) {
    for (var i = 0; i < string.length; i++) {
        for (var j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
            return false; // if match, return false
        }
        }
    }
    return true; // if no match, return true
};

console.log(isStringUniqueCharacters("AaBbCc!@#$zZyYxX.,"));