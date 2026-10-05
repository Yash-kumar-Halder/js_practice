const number = 7;
for (let i = number; i <= number * 10; i = i + number) {
  console.log(i);
}

let curr = number;
while (curr <= number * 10) {
  console.log(curr);
  curr += number;
}
