const number = 8;

for (let i = 0; i < number; i++) {
  let lineStars = "";
  for (let j = 0; j < number; j++) {
    lineStars = `${lineStars} ${"*"}`;
  }
  console.log(lineStars);
}
