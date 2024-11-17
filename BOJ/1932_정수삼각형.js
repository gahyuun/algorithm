let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');
let triangle = [];
for (let i = 0; i < input.length; i++) {
  triangle.push(input[i].split(' ').map(Number));
}
const cal = (n) => {
  if (n >= triangle.length) return;
  for (let i = 0; i < triangle[n].length; i++) {
    let a = triangle[n - 1][i];
    let b = triangle[n - 1][i - 1];
    if (a !== undefined && b !== undefined) {
      triangle[n][i] += Math.max(a, b);
    } else if (a === undefined) {
      triangle[n][i] += b;
    } else if (b === undefined) {
      triangle[n][i] += a;
    }
  }
  cal(n + 1);
};
cal(1);

console.log(Math.max(...triangle[triangle.length - 1]));
