const input = ['0 4', '1 2', '1 -1', '2 2', '3 3'];

const coordsArr = input.map(element => 
  element.split(" ").map(num => parseInt(num)
));

coordsArr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1]-b[1];
  }

  return a[0]-b[0]
}).forEach(coord => console.log(`${coord[0]} ${coord[1]}`));