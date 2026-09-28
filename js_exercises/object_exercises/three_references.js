const a = {
  x: 10,
};

const b = a;
const c = b;

c.x = 100;

console.log(a.x);
console.log(b.x);
console.log(c.x);
