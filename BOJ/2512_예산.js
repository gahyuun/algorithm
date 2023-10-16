const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(input[0]);
const amount = input[1].split(' ').map(Number);
const maxBudget = Number(input[2]);

let start = 1;
let end = Math.max(...amount);
let answer = 0;

const sum = amount.reduce((a, b) => a + b);
if (sum < maxBudget) {
  console.log(end);
} // 모든 요청이 배정될 수 있는 경우
else {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let a of amount) {
      if (a < mid) {
        sum += a;
      } else {
        sum += mid;
      }
    }

    if (sum > maxBudget) {
      // 합계가 예산 총액보다 크면 안됨
      end = mid - 1;
    } else {
      // 합계가 예산 총액보다 같거나 작음
      answer = mid;
      start = mid + 1;
    }
  }
  console.log(answer);
}
