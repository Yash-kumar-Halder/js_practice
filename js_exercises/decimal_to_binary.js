function decimalToBinary(decimal) {
    if (decimal === 0) return 0;

    let binary = "";
    let number = decimal;

    while (number > 0) {
        binary = number % 2 + binary;
        number = Math.floor(number / 2);
    }

    return binary;
}

const decimal = decimalToBinary(15);
console.log(decimal);
