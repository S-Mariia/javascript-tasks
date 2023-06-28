//medium

//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = function (nums, k) {
  k = k % nums.length;

  const rest = nums.splice(-k, k);
  nums.splice(0, 0, ...rest);
};

const nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(nums);
