const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const testCase = Number(input[0]);
let t = 0;
let index = 1;
let answer = [];
while (t < testCase) {
  const notebook1_number = Number(input[index++]);
  const notebook1 = input[index++].split(' ').map(Number);
  const notebook2_number = Number(input[index++]);
  const notebook2 = input[index++].split(' ').map(Number);
  notebook1.sort((a, b) => a - b);
  for (let element of notebook2) {
    let start = 0;
    let end = notebook1.length - 1;
    let f = false;
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      if (notebook1[mid] === element) {
        f = true;
        break;
      } else if (notebook1[mid] < element) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    f === false ? answer.push(0) : answer.push(1);
  }

  t++;
}
console.log(answer.join('\n'));
