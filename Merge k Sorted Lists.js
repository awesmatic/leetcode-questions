class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (!lists || !lists.length) return null;
    if (lists.length === 1) return lists[0];

    const mergeTwoLists = (l1, l2) => {
        let dummy = new ListNode(-1);
        let curr = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        curr.next = l1 || l2;
        return dummy.next;
    };

    while (lists.length > 1) {
        let l1 = lists.shift();
        let l2 = lists.shift();
        let merged = mergeTwoLists(l1, l2);
        lists.push(merged);
    }

    return lists[0];
}
