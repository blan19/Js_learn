// * 프로그래머스

// ! 인풋
// const str1 = "FRANCE";
// const str2 = "french";

// const str1 = "handshake";
// const str2 = "shake hands";

// const str1 = "aa1+aa2";
// const str2 = "AAAA12";

const str1 = "E=M*C^2";
const str2 = "e=m*c^2";

const isSub = (str) => {
  let res = [];
  const arr = str.split("").map((str) => str.toLowerCase());
  for (let i = 0; i < arr.length - 1; i++) {
    res.push(arr.slice(i, i + 2).join(""));
  }
  return res.filter(
    (str) => !str.match(/[0-9\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g)
  );
};

// ! 솔루션
function solution(str1, str2) {
  let sum = 0;
  let com = 0;
  const a = isSub(str1);
  const b = isSub(str2);

  if (!a.length && !b.length) {
    return 65536;
  }

  a.forEach((str) => {
    if (b.includes(str)) {
      const idx = b.indexOf(str);
      b.splice(idx, 1);
      com++;
      sum++;
    } else {
      sum++;
    }
  });

  if (b.length) {
    sum += b.length;
  }

  return Math.floor((100 / (sum / com)) * 0.01 * 65536);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(str1, str2));

// ! best

// let answer = (100 / (16 / 15)) * 0.01;
// return answer * 65536;
