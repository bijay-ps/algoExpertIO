const arr = [5, 1, 22, 25, 6, -1, 8, 10];
const seq1 = [1, 6, -1, 10];
const seq2 = [5, 1, 25, 22, 6, -1, 8, 10];

/*
    My Approach
    1. set ptr to the first elt of potential seq array 
    2. loop over the main array and compare each elt with the ptr
    3. If no match found then move on to the next elt in the main array
    4. If a match is found then move ptr to the next element
    5. If potential seq array is exhausted with or before the main array then return true else return false
*/

function validatSequence(arr, seq) {
  let ptr = 0;
  array.forEach((e) => {
    if (e === sequence[ptr] && ptr < sequence.length) {
      ptr++;
    }
  });
  return ptr === sequence.length;
}

const res1 = validatSequence(arr, seq1);
const res1 = validatSequence(arr, seq2);

console.log("res1: ", res1);
console.log("res2: ", res2);
