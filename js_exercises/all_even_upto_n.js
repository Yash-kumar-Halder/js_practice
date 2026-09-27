function evenNumebrUptoN(number) {
    if (number <= 0) return;
    evenNumebrUptoN(number - 1);
    if (!(number & 1)) {
        console.log(number);
    }
}

evenNumebrUptoN(10);