const person = {
  name: "Yash Kumar Halder",
  age: 19,
};

function birthday(persion) {
  persion = {
    persion: persion.name,
    age: persion.age + 1,
  };
  return persion;
}

const olderPersion = birthday(person);

console.log("Persion: ", person);
console.log("Older persion: ", olderPersion);
