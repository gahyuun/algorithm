function solution(n, left, right) {
  // 2차원 배열에서 인덱스를 아는 방법:  [n으로 나눈값, n으로 나눈 나머지값-1]
  // [a,b] b가 a보다 작거나 같다: b는 a+1값, b가 a보다 크다: b 값
  const answer = [];
  for (let i = left; i <= right; i++) {
    const [a, b] = [Math.floor(i / n), i % n];
    if (b > a) {
      answer.push(b + 1);
    } else {
      answer.push(a + 1);
    }
  }
  return answer;
}

/*
느낀점: 코테 풀다가 비슷한 유형을 본 적이 있다.
숫자가 2차원 배열에 규칙에 따라 작성될 때 아래를 기억하자. 
[a,b] 가 인덱스일때 
if(b가 a보다 작거나 같다) a+1값
if(b가 a보다 크다) b+1 값
 */
