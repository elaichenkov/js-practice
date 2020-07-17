const assert = require('assert');
const reverseInteger = require('./index');

assert.equal(reverseInteger(341), 143);
assert.equal(reverseInteger(-8739), -9378);
assert.equal(reverseInteger(01), 1);
