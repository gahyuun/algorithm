function solution(n) {
  n = n.toString(3);
  let array = n.split('').reverse();
  let num = BigInt(array.join(''));
  return parseInt(num, 3);
}
