/* 
    Define whether a positive whole number is even or odd
    If number is not 0 or 1: constantly subtract 2

    with negatives: treat all numbers as positive: |-75| = 75
    these are absolute values, Math.abs()
    how to implement Math.abs()???
*/

function isEven(n) {
    n = n < 0 ? -n : n;
    switch (n) {
        case 0:
            return true;
        case 1:
            return false;
        default:
            return (isEven(n-2));
    }
}

console.log(isEven(3));
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
console.log(isEven(-2));