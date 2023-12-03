// https://leetcode.com/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let substring = "";

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let maxSize = 0;

  for (let i = 0; i < s.length; i++) {
    const currLetter = s[i];

    if (substring.includes(currLetter)) {
      const repeatCharIndex = substring.indexOf(currLetter);
      maxSize = Math.max(maxSize, substring.length);
      substring = substring.slice(repeatCharIndex + 1) + currLetter;
    } else {
      substring += currLetter;
    }
  }
  return Math.max(maxSize, substring.length);
};
