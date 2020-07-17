// https://leetcode.com/problems/longest-common-prefix/

function getLongestCommonPrefix(strings) {
	if (!strings.length) return '';

	let commonPrefix = strings[0];

	for (let i = 0; i < commonPrefix.length; i++) {
		for (const string of strings) {
			if (commonPrefix[i] !== string[i]) {
				return commonPrefix.slice(0, i);
			}
		}
	}

	return commonPrefix;
}

module.exports = getLongestCommonPrefix;
