function nthFibonachiTerm(nthTerm) {
    if (nthTerm === 0) return 0;
    if (nthTerm === 1) return 1;

    return nthFibonachiTerm(nthTerm - 1) + nthFibonachiTerm(nthTerm - 2);
}

const fiboTerm = nthFibonachiTerm(5);
console.log(fiboTerm);