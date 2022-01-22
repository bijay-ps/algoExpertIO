function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let ccc = 0;
  for (const coin of coins) {
    if (coin > ccc + 1) return ccc + 1;
    ccc += coin;
  }
  return ccc + 1;
}

let coins = [1, 1, 3];
nonConstructibleChange(coins);
