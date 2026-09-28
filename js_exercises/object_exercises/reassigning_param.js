const person = {
  name: "Yash Kumar Halder",
  age: 19,
};

function birthday(persion) {
  persion = {
    persion: persion.name,
    age: persion.age + 1,
  };
}

birthday(person);

console.log(person);
