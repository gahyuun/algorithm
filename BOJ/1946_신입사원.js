const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');

let test = 0;
let index = 0;
const answer = [];
while (test < t) {
  let n = Number(input[index]);
  index++;
  const ar = [];
  let count = 0;
  for (let i = index; i < index + n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    ar.push([a, b]);
  }
  ar.sort((a, b) => {
    return a[0] - b[0];
  });
  count++;
  let max_interview_score = ar[0][1];
  for (let i = 1; i < ar.length; i++) {
    const p = ar[i];
    if (max_interview_score > p[1]) {
      count++;
      max_interview_score = p[1];
    }
  }
  answer.push(count);
  index += n;
  test++;
}
console.log(answer.join('\n'));
