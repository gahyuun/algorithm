const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const N = +input[0]; // 문자열을 숫자로 변경
const num = input[1].split(' ').map(Number);
const answer = [];

//배열 안에 숫자들이 들어가있는거

for (let i = 1; i <= N; i++) {
  answer.push([]);
}

function makeTree(arr, level) {
  if (arr.length == 1) {
    answer[level].push(arr[0]);
    return;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center + 1, arr.length);

  answer[level].push(arr[center]);
  makeTree(left, level + 1);
  makeTree(right, level + 1);

  return;
}
makeTree(num, 0);
console.log(answer.map((v) => v.join(' ')).join('\n'));
