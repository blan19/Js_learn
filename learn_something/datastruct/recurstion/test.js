// let list = {
//     value: 1,
//     next: {
//         value: 5,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// }

// let subList = list.next.next;
// list.next.next = null;

// function printList (li) {
//     console.log(li.value);
//     if (li.next) {
//         printList(li.next);
//     }
// }

// console.log(printList(subList));

function fibo(n) {
  if (n < 1) {
    return n;
  }
  const arr = [0, 1];

  const closure = (n) => {
    if (arr[n] !== undefined) {
      return arr[n];
    } else {
      return (arr[n] = closure(n - 1) + closure(n - 2));
    }
  };
  return closure(n);
}

console.log(fibo(8));
