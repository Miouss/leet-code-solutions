/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2, rest) => {
  if (!l1 && !l2 && !rest) return null;

  const total = (l1?.val ?? 0) + (l2?.val ?? 0) + (rest ?? 0);
  rest = parseInt(total / 10);

  return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, rest));
};
