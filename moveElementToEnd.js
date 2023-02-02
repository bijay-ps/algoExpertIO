function moveElementToEnd(array, toMove) {
  let len = array.length;
  let ptr = 0;
  let ctr = 0;
  while (ptr < len) {
    if (array[ptr] === toMove) {
      array.splice(ptr, 1);
      ptr++;
      ctr++;
    } else {
      ptr++;
    }
  }
  for (let i = 0; i < ctr; i++) {
    array.push(toMove);
  }
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
