const assert = require('assert');
const getLongestCommonPrefix = require('./index');

assert.equal(getLongestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
assert.equal(getLongestCommonPrefix(['dog', 'racecar', 'car']), '');
assert.equal(getLongestCommonPrefix([]), '');
