function solution(dirs) {
  // 길을 a점과 b점 사이로 나타내면 dist[0001], dist[0100] 이런 식으로 나타내기
  let answer = 0;
  const dist = {};
  const walk = (a, b, x, y, index) => {
    if (!dist[`${a}${b}${x}${y}`] && !dist[`${x}${y}${a}${b}`]) {
      answer++;
      dist[`${a}${b}${x}${y}`] = true;
      dist[`${x}${y}${a}${b}`] = true;
    } // 이미 갔던 길이 아님
    if (dirs[index] === undefined) return;
    if (dirs[index] === 'U' && y < 5) {
      walk(x, y, x, y + 1, index + 1);
    } else if (dirs[index] === 'L' && x > -5) {
      walk(x, y, x - 1, y, index + 1);
    } else if (dirs[index] === 'R' && x < 5) {
      walk(x, y, x + 1, y, index + 1);
    } else if (dirs[index] === 'D' && y > -5) {
      walk(x, y, x, y - 1, index + 1);
    } else {
      walk(a, b, x, y, index + 1); // 밖으로 벗어난거면 가만히 있기
    }
  };
  walk(0, 0, 0, 0, 0);
  return answer - 1;
}
