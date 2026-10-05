// First i will start from 2.
// Then i will check the number is prime or not.
// If yes then i will increament count by 1.
// If count reach 10 then i will breck the loop and print the number.

const term = 10;
let currTerm = 0;
let num = 2;

while (currTerm < 10) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (!isPrime) break;
    if (num % i === 0) isPrime = false;
  }
  if (isPrime) currTerm++;
  num++;
}

console.log(num - 1);
