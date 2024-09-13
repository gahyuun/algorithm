// 문자열 일치하면 제거하는 문제 저번에도 본듯 스택으로 풀자
function solution(s) {
  if (s.length % 2 != 0) return 0;
  const answer = [];
  const a = [...s];
  for (let i = 0; i < a.length; i++) {
    if (a[i] == answer[answer.length - 1]) {
      answer.pop();
      continue;
    }

    answer.push(a[i]);
    if (a.length - i < answer.length) return 0;
  }

  return 1;
}
