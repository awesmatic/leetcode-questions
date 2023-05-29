var middleNode = function (head) {
    let slow = head;
    let faster = head
    while (faster && faster.next) {
        slow = slow.next;
        faster = faster.next.next
    }
    return slow

}