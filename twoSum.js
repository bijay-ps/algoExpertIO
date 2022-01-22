function twoNumberSum(array, targetSum) {
  array = array.sort((x, y) => x - y);
  let left = 0,
    right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}

const a = [3, 5, -4, 8, 11, 1, -1, 6];
const ts = 10;

const res = twoNumberSum(a, ts);

console.log("Result: ", res);
