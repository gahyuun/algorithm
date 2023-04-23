function solution(s) {
  let left = [];
  let open = 0;
  for (const element of s) {
    if (element === '(') {
      open++;
      continue;
    } else {
      if (open === 0) return false;
      open--;
    }
  }

  return open === 0;
}
