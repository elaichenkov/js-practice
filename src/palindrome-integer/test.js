const assert = require('assert');
const isIntegerPalindrome = require('./index');

assert.equal(isIntegerPalindrome(323), true);
assert.equal(isIntegerPalindrome(-8739), false);
assert.equal(isIntegerPalindrome(01), true);
