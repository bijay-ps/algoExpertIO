function validatSequence(arr, seq) {
  let idxArr = [];
  seq.forEach((e, i) => {
    let index = arr.findIndex((ae) => ae === e);
    if (index > -1 && index > idxArr[i - 1]) {
      idxArr.push(index);
    }
  });
  if (idxArr.length === seq.length) return true;
  return false;
}

let arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
let seq1 = [1, 6, -1, 10];
let seq2 = [5, 1, 25, 22, 6, -1, 8, 10];

const res1 = validatSequence(arr1, seq1);
const res2 = validatSequence(arr1, seq2);

console.log("res1: ", res1, "res2: ", res2);
