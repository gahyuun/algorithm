// class Node {
//   constructor(data, next = null) {
//     //data와 next를 넣고 next의 디폴트는 null로 지정 왜냐하면 linkedlist의 tail(마지막은) null로 끝나기때문
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null; //처음에 데이터가 없다면 head는 null이다.
//     this.size = 0; //리스트의 크기를 찾기위해 사용 디폴트는 0으로 지정.
//   }

//   // Insert first node - 첫번째 삽입
//   insertFirst(data) {
//     this.head = new Node(data, this.head); //head에 새로운 node가 들어가고 기존의 해드는 next로 밀려난다.
//     this.size++;
//   }

//   // Insert last node - 마지막 삽입
//   insertLast(data) {
//     let node = new Node(data);
//     let current;

//     // if empty, make head
//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;

//       while (current.next) {
//         //this.head에 next가 있다면 즉, next가 null이아니라면
//         current = current.next; // current는 current.next가 되고
//       }

//       current.next = node; //결국 current.next가 새로넣은 node가 된다?
//     }
//     this.size++; //length 는 1증가
//   }

//   // Insert at index - 중간 삽입
//   insertAt(data, index) {
//     // If index is out of range ~ 인덱스가 size 범위 넘어서면 아무것도 리턴 하지 않는다.
//     if (index > 0 && index > this.size) {
//       return;
//     }

//     // If first index
//     if (index === 0) {
//       this.head = new Node(data, this.head); //즉, index 0에 삽입시 해당 노드를 넣고 다 한칸식 뒤로 미룸
//       this.size++;
//       return;
//     }

//     const node = new Node(data);
//     let current, previous;

//     // Set current first
//     current = this.head;
//     let count = 0;

//     while (count < index) {
//       previous = current; //node before index
//       count++;
//       current = current.next; //node after index
//     }

//     node.next = current;
//     previous.next = node;

//     this.size++;
//   }

//   // value를 넣으면 index를 반환
//   getValue(value) {
//     let current = this.head;
//     let index = 0;

//     while (current) {
//       //해당 data의 값을 가져오기 위해 index와 값이 같아질때까지 loop한다.
//       if (current.data === value) {
//         return index;
//       }
//       index++;
//       current = current.next;
//     }
//     return null;
//   }
//   getSize() {
//     return this.size;
//   }

//   // Remove at index
//   removeAt(index) {
//     if (index > 0 && index > this.size) {
//       return;
//     }

//     let current = this.head; //current는 현재 첫번째 노드임
//     let previous;
//     let count = 0;

//     // Remove first
//     if (index === 0) {
//       this.head = current.next;
//     } else {
//       //loop를 통해 해당 index의 연결고리를 끊는다.
//       while (count < index) {
//         count++;
//         previous = current;
//         current = current.next;
//       }
//       previous.next = current.next;
//     }

//     this.size--;
//   }
//   swapRight() {
//     let prev = this.head;
//     let current = this.head.next;
//     if (prev.data === '') {
//       // 맨 앞에 커서가 있는 경우
//       currentNext = { ...current.next };
//       prev.next = currentNext;
//       current.next = prev;
//       return true;
//     }
//     while (current.next) {
//       //해당 data의 값을 가져오기 위해 index와 값이 같아질때까지 loop한다.
//       if (current.data === '') {
//         // y '' x null

//         let currentNextNext = { ...current.next.next }; // x
//         if (!current.next.next) currentNextNext = null;
//         let currentNext = { ...current.next };
//         // ''의 next는 Null
//         current.next = currentNextNext;
//         // x의 next는 '' ('')의 next는 null
//         currentNext.next = current;
//         // y의 next는 x
//         prev.next = currentNext;
//         return true;
//       }
//       current = current.next;
//       prev = prev.next;
//     }
//     return false;
//   }
//   swapLeft() {
//     if (this.head.data === '') return false; // 맨 앞인 경우
//     let prev = this.head;
//     let current = this.head.next;
//     if (current.data === '') {
//       this.head = current; // 0이 맨앞으로옴
//       prev.next = { ...current.next };
//       current.next = prev;
//       return true;
//     } // 커서 인덱스가 1인 경우
//     while (current.next) {
//       //해당 data의 값을 가져오기 위해 index와 값이 같아질때까지 loop한다.
//       if (current.next.data === '') {
//         let currentNext = { ...current.next };
//         current.next = current.next.next;
//         currentNext.next = current;
//         prev.next = currentNext;
//         return true;
//       }
//       current = current.next;
//       prev = prev.next;
//     }
//     return true;
//   }
//   // Clear list ~ 메모리자체에는 데이터가 남아있겠지만 보여주기 위해서 func 만들었다.
//   clearList() {
//     this.head = null;
//     this.size = 0;
//   }
//   // Print list data ~ data값만 따로
//   printListData() {
//     const array = [];
//     let current = this.head; // 현재 노드를 나타냄

//     while (current) {
//       array.push(current.data);
//       current = current.next;
//     }
//     return array;
//   }
// }

// let fs = require('fs');
// let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// let input = fs.readFileSync(path).toString().trim().split('\n');

// const str = input[0];
// const array = [...str];
// const list = new LinkedList();
// list.insertFirst('');
// for (let i = array.length - 1; i >= 0; i--) {
//   list.insertFirst(array[i]);
// }

// // list는 0 (커서)를 삽입한 상태
// let cursorIndex = list.getSize() - 1;
// for (let i = 2; i < input.length; i++) {
//   const instruction = [...input[i]];
//   if (instruction[0] === 'P') {
//     const s = instruction[2];
//     list.insertAt(s, cursorIndex);
//     cursorIndex++;
//   } // $라는 문자를 커서 왼쪽에 추가함
//   if (instruction[0] === 'L') {
//     if (list.swapLeft()) cursorIndex--;
//   } // 커서를 왼쪽으로 옮김 (맨 앞이면 무시됨)
//   if (instruction[0] === 'D') {
//     if (list.swapRight()) cursorIndex++;
//   } // 커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
//   if (instruction[0] === 'B') {
//     if (cursorIndex === 0) continue;
//     list.removeAt(cursorIndex - 1);
//     cursorIndex--;
//   }
//   // 커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨) 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
// }
// console.log(list.printListData().join(''));
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().split('\n');
let lStack = input[0].split('');
let rStack = [];
let len = parseInt(input[1]);

for (let i = 2; i < 2 + len; i++) {
  let [cmd, value] = input[i].split(' ');
  if (cmd === 'L' && lStack.length) rStack.push(lStack.pop());
  else if (cmd === 'D' && rStack.length) lStack.push(rStack.pop());
  else if (cmd === 'B') lStack.pop();
  else if (cmd === 'P') lStack.push(value);
}

let answer = lStack.join('');
answer += rStack.reverse().join('');
console.log(answer);
