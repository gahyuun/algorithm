function solution(d, budget) {
  let result = 0;
  d.sort((a, b) => a - b);
  d.map((el) => {
    if (budget - el >= 0) {
      budget -= el;
      result++;
    }
  });
  return result;
}
