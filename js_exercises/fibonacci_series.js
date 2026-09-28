function fibonacci(nthTerm) {
    if (nthTerm === 0 || nthTerm === 1) return nthTerm;
    return fibonacci(nthTerm - 1) + fibonacci(nthTerm - 2)
}

function fibonacciSerise(n) {
    if (n === 0) {
        console.log(n);
        return;
    }
    fibonacciSerise(n - 1);
    console.log(fibonacci(n));
}

fibonacciSerise(10);