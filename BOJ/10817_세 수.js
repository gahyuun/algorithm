const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let data = new Array();
for (let i = 0; i < input.length; i++) {
  data[i] = parseInt(input[i]);
}
const mergeSort = (data, start, end) => {
  if (start < end) {
    let middle = Math.floor((start + end) / 2);
    mergeSort(data, start, middle);
    mergeSort(data, middle + 1, end);
    merge(data, start, middle, end);
  }
  return data;
};
//1 ,4   ,2, 3,4
const merge = (data, start, middle, end) => {
  let sort = new Array(data.length);
  let k = start;
  let leftStart = start;
  let leftEnd = middle;
  let rightStart = middle + 1;
  let rightEnd = end;

  while (leftStart <= leftEnd && rightStart <= rightEnd) {
    if (data[leftStart] < data[rightStart]) {
      sort[k++] = data[leftStart++];
    } else if (data[leftStart] === data[rightStart]) {
      sort[k++] = data[rightStart++];
    } else {
      sort[k++] = data[rightStart++];
    }
  }
  while (leftStart <= leftEnd) {
    sort[k++] = data[leftStart++];
  }
  while (rightStart <= rightEnd) {
    sort[k++] = data[rightStart++];
  }

  for (let l = start; l < end + 1; l++) {
    data[l] = sort[l];
  }
};

mergeSort(data, 0, data.length - 1);
if (data[1] === undefined) {
  console.log(String(data[0]));
} else {
  console.log(String(data[1]));
}
