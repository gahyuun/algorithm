let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
const b = input[1].split(' ').map(Number);
a.sort((a, b) => a - b);
b.sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < a.length; i++) {
  let v = a[i] * b[i];
  answer += v;
}
console.log(answer);
