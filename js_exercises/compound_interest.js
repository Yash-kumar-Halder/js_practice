function compoundInterest(principal, rate, time) {
    return (principal * (1 + rate / 100) ** time) - principal;
}

const interest = compoundInterest(1000, 10, 2);
console.log(interest);
