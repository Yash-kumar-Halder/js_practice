function factorial(number) {
    if (number <= 1) return 1;
    return number * factorial(number - 1);
}

const factorialOf5 = factorial(5);
console.log(factorialOf5);
