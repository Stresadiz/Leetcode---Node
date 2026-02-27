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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let primerNode = new ListNode(0)

    let actual = primerNode;
    let acarreo = 0;

    while (l1 != null || l2!= null || acarreo > 0) {
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;

        let suma = val1 + val2 + acarreo

        if (suma >= 10) {
            acarreo = suma % 10;
            actual = new ListNode(suma - 10);
        }

        l1 = l1.next;
        l2 = l2.next;

        actual = suma

        primerNode.next = actual
    }

    return primerNode.next;
};

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


const l1 = new ListNode(1)
const l2 = new ListNode(1)

console.log(addTwoNumbers(l1,l2));
