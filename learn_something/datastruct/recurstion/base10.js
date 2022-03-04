function baseTenToTwo (n) {
    let baseTwo = "";

    function baseTenToTwoHelper (n) {
        if ( n < 2) {
            return baseTwo += n;
        } else {
            baseTenToTwoHelper(Math.floor(n / 2));
            baseTenToTwoHelper(n % 2);
        }
    }

    baseTenToTwoHelper(n);

    return baseTwo;
}

console.log(baseTenToTwo(200));