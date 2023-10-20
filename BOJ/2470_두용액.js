const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
}
const n = Number(input[0]);
const liquid = input[1].split(' ').map(Number);
liquid.sort((a, b) => a - b);
const answer = [];
for (let i = 0; i < liquid.length; i++) {
  let num = -liquid[i];
  let a = 2000000002;
  let b = 2000000002;
  let c = 2000000002;
  let index = lowerBound(liquid, num, 0, liquid.length - 1);
  if (index !== i) a = liquid[i] + liquid[index];
  if (index - 1 !== i && index - 1 > -1) b = liquid[i] + liquid[index - 1];
  if (index + 1 !== i && index + 1 < liquid.length)
    c = liquid[i] + liquid[index + 1];
  a = Math.abs(a);
  b = Math.abs(b);
  c = Math.abs(c);
  let min = Math.min(a, b, c);
  if (min === a) {
    answer.push({ min, liquid1: liquid[i], liquid2: liquid[index] });
  } else if (min === b) {
    answer.push({ min, liquid1: liquid[i], liquid2: liquid[index - 1] });
  } else if (min === c) {
    answer.push({ min, liquid1: liquid[i], liquid2: liquid[index + 1] });
  }
  // 이 셋 중 가장 0에 가까운 거
}
answer.sort((a, b) => a.min - b.min);
if (answer[0].liquid1 < answer[0].liquid2) {
  console.log(answer[0].liquid1 + ' ' + answer[0].liquid2);
} else {
  console.log(answer[0].liquid2 + ' ' + answer[0].liquid1);
}
