// https://leetcode.com/problems/container-with-most-water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;

  let left = 0;
  let right = height.length - 1;

  while (left != right) {
    const h1 = height[left];
    const h2 = height[right];

    const lowestH = Math.min(h1, h2);
    const delta = right - left;
    maxArea = Math.max(maxArea, lowestH * delta);

    if (h1 > h2) {
      right--;
    } else {
      left++;
    }
  }

  return maxArea;
};
