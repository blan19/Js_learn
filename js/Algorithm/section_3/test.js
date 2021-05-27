function splitString (str) {
    let n = str.split('').reverse().join('');
    return n;
}

const str1 = "안녕하세요";

console.log(splitString(str1));