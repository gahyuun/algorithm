// 정답 코드
/*
n번째 칸에 도착한 경우의 수는 
1. n-1번째 칸에서 1칸 뛰어서 도착한 경우
2. n-2번째 칸에서 2칸 뛰어서 도착한 경우
n번째 값을 계산할 때 F(n) = F(n-1) + F(n-2) 형태인 피보나치 수열도 고민해보기 
 */
function solution(n) {
  var answer = 0;
  var dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    // %1234567을 해당 코드에 해야 하는 이유는 정수 범위를 초과하여 계산 오류를 발생할 수 있기 때문에
  }
  answer = dp[n];
  return answer;
}

// 내 코드  시간 초과
function solution(n) {
  let result = 0;
  const cal = (num) => {
    if (num < 0) return;
    if (num === 0) {
      result++;
      return;
    }
    cal(num - 1);
    cal(num - 2);
  };
  cal(n);
  return result % 1234567;
}

// dp에 대한 공부가 필요하다고 느낌
