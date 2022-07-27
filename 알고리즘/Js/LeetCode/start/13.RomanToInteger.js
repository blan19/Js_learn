const input = "MCMXCIV";

const solution = function (input) {
  let answer = [0, 0];
  const targetRomanNumber = input.split("");
  const romanNumber = new Map();
  romanNumber.set("I", 1);
  romanNumber.set("IV", 4);
  romanNumber.set("IX", 9);
  romanNumber.set("V", 5);
  romanNumber.set("X", 10);
  romanNumber.set("XL", 40);
  romanNumber.set("XC", 90);
  romanNumber.set("L", 50);
  romanNumber.set("C", 100);
  romanNumber.set("CD", 400);
  romanNumber.set("CM", 900);
  romanNumber.set("D", 500);
  romanNumber.set("M", 1000);

  for (let i = 0; i < targetRomanNumber.length - 1; i++) {
    if (romanNumber.has(`${targetRomanNumber[i]}${targetRomanNumber[i + 1]}`)) {
      answer[0] =
        answer[0] +
        romanNumber.get(`${targetRomanNumber[i]}${targetRomanNumber[i + 1]}`);
      continue;
    }
    answer[0] = answer[0] + romanNumber.get(targetRomanNumber[i]);
  }

  return answer;
};

console.log(solution(input));
