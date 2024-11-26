/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  // - 가 짝수 일때는 둘은 결국 둘이 붙으니까 다 양수로 바뀔 수 있음. 인접한 걸 계속 곱하다보면
  // - 가 홀수 일때는 가장 작은 숫자는 결국 -에서 바뀔 수 없음. 근데 만약 -중 가장 작은 수여도 +인 애를 -로 바꾸고 가장 작은 애를 -로 바꿀거니까. 결국 -가 짝수일때는 다 +가 되어서 max sum. -가 홀수 일때는 절댓값이 가장 작은 숫자를 빼주면 됨.
  let negative_count = 0;
  let min_number = 1000000;
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += Math.abs(Number(matrix[i][j]));
      if (matrix[i][j] < 0) negative_count++;
      min_number = Math.min(Math.abs(Number(matrix[i][j])), min_number);
    }
  }

  if (negative_count % 2 !== 0) {
    return sum - min_number * 2;
  } else {
    return sum;
  }
};
