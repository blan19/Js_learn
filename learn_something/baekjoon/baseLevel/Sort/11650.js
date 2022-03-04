const array = ['7', '1 -1', '3 3', '1 -2', '1 1', '3 -2', '-2 1', '-3 1'];
const coordsArr = array.map(element => 
  element.split(" ").map(num => parseInt(num))
);


coordsArr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0]-b[0]
  }

  return a[1]-b[1];
}).forEach(arr => console.log(`${arr[0]} ${arr[1]}`));
