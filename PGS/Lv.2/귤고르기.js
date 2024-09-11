function solution(k, tangerine) {
  // 각 크기별로 갯수 측정
  // 갯수가 많은 것대로 제거하면서 K랑 일치할 때까지 result 확인
  const arr = [];
  for (let i = 0; i < tangerine.length; i++) {
    const v = tangerine[i];
    if (arr[v]) arr[v].value++;
    else arr[v] = { index: v, value: 1 };
  }
  arr.sort((a, b) => b.value - a.value);
  arr.pop();
  let num = 0;
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    const { index, value } = arr[i];
    num += value;
    if (num >= k) {
      break;
    } else result++;
  }
  return result;
}
