function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

function square(num) {
  return num * num;
}

function testFn(fnName, fn, input, expectedOutPut) {
  const output = fn(input);
  if (output !== expectedOutPut) {
    console.log(
      `❌Error: For ${fnName} input: ${input}, expected output is ${expectedOutPut}, but output is: ${output}`,
    );
  } else {
    console.log(
      `✅Output matches: For ${fnName} input ${input}, expected output is ${expectedOutPut}, output is: ${output}`,
    );
  }
}

testFn("Factorial", factorial, 4, 24);
testFn("Factorial", factorial, 5, 120);
testFn("Factorial", factorial, 6, 120);
