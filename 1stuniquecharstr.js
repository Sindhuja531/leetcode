/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const charCount = {}; // {s:1, i:2, n:2, g:2; for word singing }
  // character count object
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = charCount[char] + 1 || 1;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === 1) {
      return i;
    }
  }
  return -1;
};
