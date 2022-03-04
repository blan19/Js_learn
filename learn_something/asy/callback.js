/*

function Increase (num, callback) {
  setTimeout(() => {
    const result = num + 10;

    if (callback) {
      callback(result);
    }
  }, 1000);
}

*/

/*

function Increase (num) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패

    setTimeout(() => {
      const result = num + 10;
      if (result > 50) {
        // 50보다 크면 에러 발생
        
        const e = new Error('NumberTooBig');
        return reject(e);
      }

      resolve(result); // number 값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
}

Increase(0)
.then(number => {
  console.log(number);
  return Increase(number);
})
.then(number => {
  console.log(number);
  return Increase(number);
})
.then(number => {
  console.log(number);
  return Increase(number);
})
.then(number => {
  console.log(number);
  return Increase(number);
})
.then(number => {
  console.log(number);
  return Increase(number);
})
.then(number => {
  console.log(number);
  return Increase(number);
})
.catch(e => {
  console.log(e);
});

*/

function Increase (num) {
  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      const result = num + 10;

      if (result > 50) {
        const e = new Error('Number Too Big..!');
        return reject(e);
      }

      resolve(result);
    });
  }, 2000);

  return promise;
}

async function runIncrease () {
  try { // try / catch 구문을 사용하여 에러를 처리
    let result = await Increase(0);
    console.log(result);
    result = await Increase(result);
    console.log(result);
    result = await Increase(result);
    console.log(result);
    result = await Increase(result);
    console.log(result);
    result = await Increase(result);
    console.log(result);
    result = await Increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
