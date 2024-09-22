/* 
내 풀이 틀린 풀이 
function solution(triangle) {
  let max = 0;
  const add = (i, j, num) => {
    if (j >= triangle.length - 1) {
      if (max < num) {
        max = num;
      }
      return;
    }

    add(i, j + 1, num + triangle[j + 1][i]);
    add(i + 1, j + 1, num + triangle[j + 1][i + 1]);
  };
  add(0, 0, triangle[0][0]);
  return max;
}
*/
function solution(triangle) {
  const height = triangle.length;

  // 마지막 행부터 시작하여 위로 올라가면서 최대 합을 계산
  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      // 현재 위치에서 아래 두 값 중 큰 값을 선택하여 더함
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  // 맨 위의 값이 최대 경로의 합
  return triangle[0][0];
}
