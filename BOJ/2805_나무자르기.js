const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const ar = input[1].split(' ').map(Number);

let min = 1;
let max = Math.max(...ar);

const getTree = (height) => {
  let sum = 0;
  for (let a of ar) {
    if (height < a) {
      sum = sum + (a - height);
    }
  }
  return sum;
};

let answer = 0;
while (min <= max) {
  let mid = parseInt((min + max) / 2);
  let sum = getTree(mid);
  if (sum >= m && mid > answer) {
    answer = mid;
  }
  if (sum <= m) {
    max = mid - 1;
  }
  if (sum > m) {
    min = mid + 1;
  }
}

console.log(answer);
