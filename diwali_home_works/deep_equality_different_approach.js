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

function areObjectsEqual(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (const key in a) {
    if (!(key in b)) return false;
    return isEqual(a[key], b[key]);
  }
  return true;
}

function isEqual(a, b) {
  if (a === b) return true;
  if (!areTypeEqual(a, b)) return false;
  switch (getType(a)) {
    case "array":
      return areArraysEqual(a, b);
    case "object":
      return areObjectsEqual(a, b);
  }
  return false;
}

function test(message, expected, a, b) {
  const isPassed = isEqual(a, b) === expected;
  const symbol = isPassed ? "✅" : "❌";
  console.log(`${symbol} ${message}`);
}

function testBooleans() {
  test("Two same boolean should be equal", true, true, true);
  test("Two different boolean should be unequal", false, false, true);
  test("One boolean and one number should be unequal", false, true, 1);
}

function testNumber() {
  test("Two same numeber should be equal", true, 5, 5);
  test("Two same negetive numeber should be equal", true, -5, -5);
  test("One negetive and one positive number", false, -5, 5);
  test("Two different number should be unequal", false, 4, 1);
}

function testString() {
  test("Two same string should be equal", true, "hello", "hello");
  test("Two different string should be unequal", false, "Hello", "world");
}

function testArray() {
  test("Two empty array should be equal", true, [], []);
  test("Two same array should be equal", true, [5], [5]);
  test("One empty array and one non empty array", false, [], [5]);
  test("Two array with same length but different value should be equal", false, [2], [5]);
  test("Two same nested empty array should be equal", true, [[]], [[]]);
  test("Two same nested array should be equal", true, [[1]], [[1]]);
  test("Two diffrent nested array should be equal", false, [[1]], [[5]]);
}

function testObejct() {
  test("Two empty object should be equal", true, {}, {});
  test("One object and one empty object should be unequal", false, { a: 1 }, {});
  test("One object and one empty object should be unequal", false, { a: 1 }, {});
  test("Two object with different key should be unequal", false, { a: 1 }, { b: 1 });
  test("Two same object with different value should be unequal", false, { a: 1 }, { a: 2 });
  test("Two same nested object should be equal", true, { a: { b: 1 } }, { a: { b: 1 } });
}

function main() {
  testBooleans();
  testNumber();
  testString();
  testArray();
  testObejct();
}

main();
