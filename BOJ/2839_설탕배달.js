// 연습장

let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().split('\n');

const num = Number(input[0]);

// 내 풀이
let answer = 0;
let index = 0;
while (true) {
  if (num < index * 5) {
    break;
  }

  if ((num - index * 5) % 3 === 0) {
    answer = index + (num - index * 5) / 3;
  }
  index++;
}

if (answer === 0) console.log(-1);
else {
  console.log(answer);
}

//dp!!!!로 풀어보기
function minSugarBags(N) {
  // DP 배열을 초기화 (무한대로 설정)
  const dp = new Array(N + 1).fill(Infinity);
  dp[0] = 0; // 0킬로그램은 봉지가 필요없음
  dp[3] = 1;
  dp[5] = 1;
  for (let i = 6; i <= N; i++) {
    if (i >= 3) {
      dp[i] = dp[i - 3] + 1; // 킬로그램 -3 ( 만약 킬로그램-3이 봉지로 나눌 수 있는 상태라면 여기서 3킬로그램 짜리 하나만 더 들면 됨
    }
    if (i >= 5) {
      dp[i] = Math.min(dp[i], dp[i - 5] + 1); // 킬로그램 -5 가 봉지로 나눌 수 있는 상태면 5킬로그램 하나 더 들면됨
      //이때 5킬로 그램 하나 드는게 더 적은지, 3킬로그램 하나 드는게 더 적은지 판단
    }
  }

  console.log(dp);

  // N킬로그램을 정확히 나눌 수 없는 경우 -1을 반환
  return dp[N] === Infinity ? -1 : dp[N];
}

console.log(minSugarBags(num));
