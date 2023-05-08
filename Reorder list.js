function reorderList(head) {
    if (!head) return null;

    // Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let prev = null;
    let curr = slow;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Merge the first and second halves of the linked list
    let p1 = head;
    let p2 = prev;
    while (p2.next) {
        const next1 = p1.next;
        const next2 = p2.next;
        p1.next = p2;
        p2.next = next1;
        p1 = next1;
        p2 = next2;
    }
}
