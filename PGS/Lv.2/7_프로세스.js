function solution(priorities, location) {
  let count = 1;

  while (priorities.length !== 0) {
    let max = Math.max(...priorities);
    const length = priorities.length;
    for (let i = 0; i < length; i++) {
      if (priorities[i] === max) {
        if (i === location) {
          return count;
        }
        priorities[i] = 0;
        max = Math.max(...priorities);
        count++;
        continue;
      }
    }
  }
  return count;
}
