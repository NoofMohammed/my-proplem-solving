function isPrime(num) {
  if (num < 2) {
    return false;
  } else {
    for (let i = num - 1; i >= 0; i--) {
      if (num % i === 0 && i !== num && i !== 1) {
        return false;
      }
    }
    return true;
  }
}

isPrime(5); //true

function nextBigger(n) {
  let str = n.toString().split("").reverse().join("");
  return Number(str);
}
