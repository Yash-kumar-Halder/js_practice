function getType(a) {
  if (Array.isArray(a)) return "array";
  return typeof a;
}

function areTypeEqual(a, b) {
  return getType(a) === getType(b);
}

function areArraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!isEqual(a[i], b[i])) return false;
  }
  return true;
}

function isEqual(a, b) {
  if (a === b) return true;
  if (!areTypeEqual(a, b)) return false;
  switch (getType(a)) {
    case "array":
      return areArraysEqual(a, b);
  }
  return false;
}

function test(message, expected, a, b) {
  const isPassed = isEqual(a, b) === expected;
  const symbol = isPassed ? "✅" : "❌";
  console.log(`${symbol} ${message}`);
}

function testBooleans(params) {
  test("Two same boolean should be equal", true, true, true);
  test("Two different boolean should be unequal", false, false, true);
  test("One boolean and one number should be unequal", false, true, 1);
}

function main() {
  testBooleans();
  testNumber();
  testString();
  testArray();
}

main();

function testArray() {
  test("Two empty array should be equal", true, [], []);
  test("Two same array should be equal", true, [5], [5]);
  test("Two array with same length but different value should be equal", false, [2], [5]);
  test("Two same nested empty array should be equal", true, [[]], [[]]);
  test("Two same nested array should be equal", true, [[1]], [[1]]);
  test("Two diffrent nested array should be equal", false, [[1]], [[5]]);
}

function testString() {
  test("Two same string should be equal", true, "hello", "hello");
  test("Two different string should be unequal", false, "Hello", "world");
}

function testNumber() {
  test("Two same numeber should be equal", true, 5, 5);
  test("Two different number should be unequal", false, 4, 1);
}
