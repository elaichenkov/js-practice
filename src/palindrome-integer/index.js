// https://leetcode.com/problems/palindrome-number/

function isIntegerPalindrome(integer) {
    function reverseInteger(int) {
        let reversedInteger = 0;
        let poppedInteger = 0;

        while (int !== 0) {
            poppedInteger = int % 10;
            int = Math.trunc(int / 10);

            reversedInteger = reversedInteger * 10 + poppedInteger;
        }

        return reversedInteger;
    }

    return integer === reverseInteger(integer);
}

module.exports = isIntegerPalindrome;
