function f(number) {
  return number * g(number);
}

function g(number) {
  return number + h(number);
}

function h(number) {
  return number + 1;
}

console.log(f(3));
