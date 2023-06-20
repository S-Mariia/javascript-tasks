// medium
// https://leetcode.com/problems/add-two-numbers/description/?envType=featured-list&envId=top-interview-questions

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var addTwoNumbers = function (l1, l2) {
  const addNumbersWithExtraOne = function (l1, l2, extra) {
    let extraOne = 0;
    if (l1?.val + l2?.val + extra > 9) {
      extraOne = 1;
    }

    return {
      val: ((l1?.val || 0) + (l2.val || 0) + extra) % 10,
      next:
        l1?.next !== null || l2?.next !== null || extraOne === 1
          ? addNumbersWithExtraOne(
              l1?.next || { val: 0, next: null },
              l2?.next || { val: 0, next: null },
              extraOne
            )
          : null,
    };
  };

  return addNumbersWithExtraOne(l1, l2, 0);
};

////////////////////////////////////////////////////////////////////////////////////////////

// Show how it works
const num1 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: null,
    },
  },
};
// 999

const num2 = {
  val: 2,
  next: {
    val: 8,
    next: null,
  },
};
// 28

const transformListNodeIntoNumber = function (listNode) {
  const { val, next } = listNode;
  return next !== null
    ? String(val) + transformListNodeIntoNumber(next)
    : String(val);
};

console.log(transformListNodeIntoNumber(addTwoNumbers(num1, num2)));
