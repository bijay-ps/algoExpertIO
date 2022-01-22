function sortedSquaredArray(array) {
  let min = 0,
    max = array.length - 1;
  let res = new Array(array.length).fill(0);
  while (max >= min) {
    if (Math.abs(array[max]) > Math.abs(array[min])) {
      res[max] = array[max] ** 2;
      max--;
    } else {
      res[max] = array[min] ** 2;
      min++;
    }
  }
  return res;
}

const arr = [-2, -1];
const res = sortedSquaredArray(arr);
console.log("Result: ", res);
