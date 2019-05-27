// Return the number the most digits (If equal in length then return the first one)

const findLong = (array) => {
  //sort array here
  for(let i=array.length-1; i>0; i--) {
    if((array[i]/10).toString().length !== (array[i-1]/10).toString().length) {
      return array[i];
    }
  }
}

const result = findLong([2, 2, 300, 200]);
console.log(result);

const findLongest = l => l.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

const result2 = findLongest([1000, 500, 2, -300, 40, 500, 600]);
console.log(result2);

const findLonger = (array) => {
  array.sort((a, b) => b);
  return array;
}

const result3 = findLonger(['1', '2', '300']);
console.log(result3);

