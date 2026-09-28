const person = {
  name: "Yash Kumar Halder",
  age: 19,
};

function birthday(persion) {
  persion.age += 1;
  return;
}

birthday(person);

console.log(person);
