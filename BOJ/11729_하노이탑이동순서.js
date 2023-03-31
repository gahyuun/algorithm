let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let num = Number(input);
let ar = [];
let count = 0;
const hanoi = (n, from, other, to) => {
  if (n === 0) {
    return;
  }

  hanoi(n - 1, from, to, other);
  ar.push([from, to]);
  count++;
  hanoi(n - 1, other, from, to);
};
hanoi(num, '1', '2', '3');
console.log(count);
console.log(ar.map((element) => element.join(' ')).join('\n'));
