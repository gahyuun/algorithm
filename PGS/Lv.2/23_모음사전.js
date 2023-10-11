function solution(word) {
  const word_ar = ['', 'A', 'E', 'I', 'O', 'U'];
  let selected = [];
  const result = [];
  function dfs(depth) {
    if (depth === 0) {
      result.push(selected.join(''));
      return;
    }
    for (let i = 0; i < word_ar.length; i++) {
      selected.push(word_ar[i]);
      dfs(depth - 1);
      selected.pop();
    }
    return;
  }
  dfs(5);
  const data = [...new Set(result)].sort();
  return data.indexOf(word);
}
