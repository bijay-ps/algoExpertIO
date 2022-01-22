function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left += 1;
        right -= 1;
      } else if (currentSum < targetSum) {
        left += 1;
      } else if (currentSum > targetSum) {
        right -= 1;
      }
    }
  }
  return triplets;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

/*
Sample Inputs:
[1,2,3], 6
[1,2,3], 7
[8,10,-2,49,14], 57
[12, 3, 1, 2, -6, 5, 0, -8, -1],0
[12, 3, 1, 2, -6, 5, 0, -8, -1, 6],0
[12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5],0
[1, 2, 3, 4, 5, 6, 7, 8, 9, 15],18
[1, 2, 3, 4, 5, 6, 7, 8, 9, 15],32
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],33
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],5
*/
