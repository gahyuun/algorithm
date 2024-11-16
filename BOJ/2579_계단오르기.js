let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().split('\n');
const stairs = [];
for (let i = 1; i < input.length; i++) {
  stairs.push(Number(input[i]));
}
const n = Number(input[0]);
const dp = new Array(n).fill(0);

dp[0] = stairs[0];
dp[1] = stairs[1] + stairs[0];
dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];
for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 2], stairs[i - 1] + dp[i - 3]) + stairs[i]; // 세칸 연속으로 가면 안되니까 1,2,3 중에 2번째칸을 버리는 걸 선택할건지 1번째 칸을 버리는걸 선택할건지
}
console.log(dp[n - 1]);
