// https://leetcode.com/problems/reverse-integer/

function reverseInteger(integer) {
    let reversedInteger = 0;
    let poppedInteger = 0;

    while (integer !== 0) {
        poppedInteger = integer % 10;
        integer = Math.trunc(integer / 10);

        reversedInteger = reversedInteger * 10 + poppedInteger;
    }

    return reversedInteger;
}

module.exports = reverseInteger;
