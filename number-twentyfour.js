// Find the only element in an array that only occurs once

const findOne = (array) => {
  array.sort();
  let repNum = 0; 
  let rep = array[0];
  for(let i=1; i<array.length; i++) {
    if(array[i] === rep) {
      repNum += 1;
      rep = array[i];
    } else if(repNum !== 0) {
      repNum = 0;
      rep = array[i];
    } else {
      return rep;
    }
  }
  if(repNum === 0) {
    return array[array.length-1];
  }
}

const result = findOne([1, 1, 4, 3, 5, 5, 4, -2, -2, 2, 2, 3]);
console.log(result);
