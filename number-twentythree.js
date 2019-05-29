// find sum of all multiples of 3 and 5 up to and including n

const findSum = (num) => {
  let result = 0;
  for(let i=0; i<=num; i += 3) {
    result = result + i; 
  }
  for(let j=0; j<=num; j += 5) {
    if(j % 3 !== 0) {
      result = result + j;
    }
  }
  return result;
}

const result = findSum(10);
console.log(result);
