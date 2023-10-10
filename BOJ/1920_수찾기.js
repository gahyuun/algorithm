let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

const n = Number(input[0]);
const array_a = input[1].split(' ').map(Number);
const m = Number(input[2]);
const array_m = input[3].split(' ').map(Number);
let answer_ar = [];
array_a.sort((a, b) => a - b);
for (const element of array_m) {
  let start = 0;
  let end = array_a.length - 1;
  let answer = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (element === array_a[mid]) {
      answer = 1;
    }
    if (element < array_a[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  answer_ar.push(answer);
}
console.log(answer_ar.join('\n'));
