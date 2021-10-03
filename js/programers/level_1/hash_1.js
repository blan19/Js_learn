const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

const solution = (participant, completion) => {
  const hashed = {};

  for (const iterator of participant) {
    if (hashed[iterator]) {
      hashed[iterator]++;
    } else {
      hashed[iterator] = 1;
    }
  }

  for (const iterator of completion) {
    hashed[iterator]--;
  }

  for (const key in hashed) {
    if (hashed[key] === 1) {
      return key;
    }
  }
};

// const solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
