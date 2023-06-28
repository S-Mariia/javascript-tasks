//easy
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//Note that you must do this in-place without making a copy of the array.

const moveZeroes = function (nums) {
  if (!nums.includes(0)) return nums;
  const indexesArr = nums.reduce(
    (acc, item, idx) => (item === 0 ? [...acc, idx] : acc),
    []
  );
  for (let i = 0; i < indexesArr.length; i += 1) {
    nums.splice(indexesArr[i] - i, 1);
  }
  const zeroesArray = new Array(indexesArr.length).fill(0);
  nums.push(...zeroesArray);
};

// better way
const moveZeroes1 = function (nums) {
  if (!nums.includes(0)) return nums;
  let startIdx = 0;
  let nextNumbIdx = 1;

  while (nextNumbIdx < nums.length) {
    if (nums[startIdx] === 0 && nums[nextNumbIdx] !== 0) {
      const temp = nums[startIdx];
      nums[startIdx] = nums[nextNumbIdx];
      nums[nextNumbIdx] = temp;
      startIdx += 1;
      nextNumbIdx += 1;
    }
    if (nums[startIdx] === 0 && nums[nextNumbIdx] === 0) {
      nextNumbIdx += 1;
    }
    if (nums[startIdx] !== 0) {
      startIdx += 1;
      nextNumbIdx += 1;
    }
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes1(nums);
console.log(nums);
