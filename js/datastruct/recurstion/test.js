let list = {
    value: 1,
    next: {
        value: 5,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

let subList = list.next.next;
list.next.next = null;


function printList (li) {
    console.log(li.value);
    if (li.next) {
        printList(li.next);
    }
}

console.log(printList(subList));