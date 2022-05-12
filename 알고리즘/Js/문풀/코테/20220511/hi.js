function calc(number, room) {
    return ("₩" + (number * room).toLocaleString("ko-kr", { maximumFractionDigits: 3 }));
}
console.log(calc(7700, 30));
