function solution(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] >= sizes[i][1]) continue;
    else {
      const temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }
  }
  let max_a = 0;
  let max_b = 0;
  for (let i = 0; i < sizes.length; i++) {
    max_a = Math.max(sizes[i][0], max_a);
    max_b = Math.max(sizes[i][1], max_b);
  }
  return max_a * max_b;
}
