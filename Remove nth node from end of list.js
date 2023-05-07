
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


const createLinkedList = (arr) => {
    if (!arr || !arr.length) {
        return null;
    }

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

const arr = [1, 2, 3, 4, 5];
const head = createLinkedList(arr);
var removeNthFromEnd = function (head, n) {
    if (!head) {
        return null;
    }

    let fast = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if (!fast) {
        return head.next;
    }

    let slow = head;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return head.next;
};
console.log(removeNthFromEnd(head, n = 2))