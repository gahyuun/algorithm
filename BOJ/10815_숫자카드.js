let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
const m_array = input[1].split(' ').map(Number);

const n_array = input[3].split(' ').map(Number);
m_array.sort((a, b) => a - b);
const answer_ar = [];
for (const element of n_array) {
  let start = 0;
  let end = m_array.length - 1;
  let answer = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (element === m_array[mid]) {
      answer = 1;
    }
    if (element < m_array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  answer_ar.push(answer);
}
console.log(answer_ar.join(' '));
