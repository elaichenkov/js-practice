// https://leetcode.com/problems/two-sum/

function twoSum(numbers, targetNumber) {
  const hashMapValue = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const potentialMatch = targetNumber - number;

    if (hashMapValue.has(potentialMatch)) {
      return [hashMapValue.get(potentialMatch), i];
    } else {
      hashMapValue.set(number, i);
    }
  }

  return [];
}

module.exports = twoSum;
