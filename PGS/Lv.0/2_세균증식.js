function solution(n, t) {
  let answer = n;
  for (let i = 1; i < t + 1; i++) {
    answer *= 2;
  }
  return answer;
}

//제곱으로 해결
function solution(n, t) {
  return n * 2 ** t;
}

//결국엔 처음 n*2를 t번하는 것과 마찬가지
