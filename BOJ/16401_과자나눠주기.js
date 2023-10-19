const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);
const cookies = input[1].split(' ').map(Number);

let min = 1;
let max = Math.max(...cookies);

const divideCookie = (length) => {
  let temp_cookies = [...cookies];
  let index = 0;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = index; j < temp_cookies.length; j++) {
      if (temp_cookies[j] >= length) {
        temp_cookies[j] -= length;
        count++;
        index = j;
        break;
      }
    }
  }
  return count;
};
let answer = 0;
while (min <= max) {
  let mid = parseInt((min + max) / 2);
  let count = divideCookie(mid);

  if (count === m) {
    answer = mid;
    min = mid + 1;
  } else if (count < m) {
    max = mid - 1;
  }
}
console.log(answer);
