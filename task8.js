//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

const searchInsert = function (nums, target) {
  const idx = nums.indexOf(target);
  if (idx !== -1) {
    return idx;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  if (target < nums[0]) {
    return 0;
  }
  for (let i = 0; i <= nums.length - 1; i += 1) {
    if (target < nums[i]) {
      return i;
    }
  }
};

const nums = [1, 3, 7, 9];
const target = 2;

console.log(searchInsert(nums, target));
