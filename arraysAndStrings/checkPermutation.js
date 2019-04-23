/*
    Given two strings, write a method to decide if one is a permutation of 
    the other.
*/

function checkPermuteWithObject(stringOne, stringTwo){
    if (stringOne.length !== stringTwo.length) return false;
    
    let map = {};
    for (let i = 0; i < stringOne.length; i++) {
        if (map[stringOne[i]]) {
            map[stringOne[i]]++;
        } else {
            map[stringOne[i]] = 1;
        }
    }

    for (let i = 0; i < stringTwo.length; i++) {
        if (map[stringTwo[i]]) {
            map[stringTwo[i]]--;
            if(map[stringTwo[i]] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

function checkPermute(stringOne, stringTwo) {
    // if different lengths, return false
    if (stringOne.length !== stringTwo.length) {
        return false;
    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
    } else {
        let sortedStringOne = stringOne.split('').sort().join('');
        let sortedStringTwo = stringTwo.split('').sort().join('');
        return sortedStringOne === sortedStringTwo;
    }
}

// Tests
console.log(checkPermuteWithObject('aba', 'aab'), true);
console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermuteWithObject('aba', 'aaba'), false);
console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermuteWithObject('aba', 'aa'), false);
console.log(checkPermute('aba', 'aa'), false);