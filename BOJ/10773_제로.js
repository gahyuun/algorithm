let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Stack {
  constructor() {
    this.array = [];
    this.index = 0;
  }
  push(item) {
    this.array[this.index++] = item;
  }
  pop() {
    if (this.index <= 0) return null;
    const result = this.array[--this.index];
    return result;
  }
  getIndex() {
    return this.array.length;
  }
}

let stack = new Stack();
for (let i = 1; i < input.length; i++) {
  if (parseInt(input[i]) === 0) {
    stack.pop();
  } else {
    stack.push(parseInt(input[i]));
  }
}
let data = 0;

for (let i = 0; i <= stack.getIndex(); i++) {
  data += stack.pop();
}
console.log(data);
