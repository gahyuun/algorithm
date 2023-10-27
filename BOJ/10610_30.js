const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const ar = input[0].split('').map(Number);
ar.sort((a, b) => b - a);
if (ar[ar.length - 1] === 0) {
  const sum = ar.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  if (sum % 3 !== 0) {
    console.log(-1);
  } else {
    const number = ar.join('');
    console.log(number);
  }
} else {
  console.log(-1);
}
