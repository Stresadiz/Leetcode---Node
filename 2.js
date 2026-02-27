/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function addTwoNumbers(l1, l2) {
    let primerNode = new ListNode(0);
    let actual = primerNode;
    let acarreo = 0;
    while (l1 != null && l2 != null) {
        let suma = l1.val + l2.val + acarreo;
        acarreo = suma % 10;
        l1 = l1.next;
        l2 = l2.next;
    }
    return primerNode.next;
}
;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
const l1 = new ListNode(1);
const l2 = new ListNode(1);
console.log(addTwoNumbers(l1, l2));
