const assert = require('assert');
const twoSum = require('./index');

assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepStrictEqual(twoSum([], 0), []);
assert.deepStrictEqual(twoSum([9, 32, -1, 2, 6], 5), [2, 4]);
