// find the n-th sequence in fibonacci sequence 

const findFib = (n) => {
  if(n === 1 || n === 2) {
    return 1;
  } else {
    return findFib(n-1) + findFib(n-2);
  }
}

const result = findFib(9);
console.log(result);
