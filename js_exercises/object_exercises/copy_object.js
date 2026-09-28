const a = {
  x: 10,
};

const b = a;

b.x = 50;

console.log("a.x: ", a.x);
console.log("b.x: ", b.x);
