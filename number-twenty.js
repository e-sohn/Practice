// Write fibbonaci iteratively and recursively (bonus: use dynamic programming)

const fibRec = (index) => {
  if(index === 1 || index === 2) {
    return 1;
  } else {
    return fibRec(index-1) + fibRec(index-2);
  }
}

const result = fibRec(10);
console.log(result);

const fibIt = (index) => {
  let int1 = 1;
  let int2 = 1;
  let toggle = 0;
  if(index === 1 || index === 2) {
    return 1;
  } else {
    for(let i=3; i<=index; i++) {
      if(toggle === 0) {
        int1 = int1 + int2;
        toggle = 1;
      } else {
        int2 = int1 + int2;
        toggle = 0;
      }
    }
    if(toggle === 1) {
      return int1;
    } else { 
      return int2;
    }
  }
}

const result2 = fibIt(10);
console.log(result2);
