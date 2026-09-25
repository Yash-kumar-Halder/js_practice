function createParentheses(numberOfParentheses) {
  if (numberOfParentheses === 0) return "";
  if (numberOfParentheses < 0) return "Invalid";
  const parenthesesStr = "(" + createParentheses(numberOfParentheses - 1) + ")";
  return parenthesesStr;
}

console.log(createParentheses(0));
console.log(createParentheses(1));
console.log(createParentheses(3));
console.log(createParentheses(-8));
console.log(createParentheses(14));
