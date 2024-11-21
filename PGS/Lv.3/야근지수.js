function solution(n, works) {
  // 전체적인 숫자를 낮춰야함.
  // 1. 일단 제일 큰 숫자가 있으면 그게 두번째로 큰 숫자랑 같게 맞춤
  // 2. 일단 그러면 큰 애들을 다음 작은 숫자까지 낮춤
  // 작은 애를 없애는거 보다 제곱이므로 큰 애들을 낮추는게 중요
  const findMax = () => {
    let max = -1;
    let index = -1;
    for (let i = 0; i < works.length; i++) {
      if (works[i] > max) {
        max = works[i];
        index = i;
      }
    }
    return index;
  };

  for (let i = 0; i < n; i++) {
    if (works[findMax()] === 0) {
      return 0;
    }
    works[findMax()]--;
  }
  let answer = 0;
  for (let work of works) {
    answer += work ** 2;
  }
  return answer;
}
