/*
    My Approach
    1. set ptr to the first elt of potential seq array 
    2. loop over the main array and compare each elt with the ptr
    3. If no match found then move on to the next elt in the main array
    4. If a match is found then move ptr to the next element
    5. If potential seq array is exhausted with or before the main array then return true else return false
*/

function validatSequence(array, sequence) {
  let ptr = 0;
  array.forEach((e) => {
    if (e === sequence[ptr] && ptr < sequence.length) {
      ptr++;
    }
  });
  return ptr === sequence.length;
}

function validatSequenceAlgoExpertCode(array, sequence) {
  let arrIdx = 0,
    seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

const res1 = validatSequence(arr, seq1);
const res2 = validatSequence(arr, seq2);

console.log("res1: ", res1);
console.log("res2: ", res2);
