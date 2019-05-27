// reverse integer

const reverseInt = (integer) => {
  let isNegative = 1;
  if(integer < 0) {
    isNegative = -1;
  }
  let reverseArray = [];
  for(let i=integer.toString().length-1; i>=0; i--) {
    reverseArray.push(integer.toString()[i]);
  }
  let revString = reverseArray.join("");
  let revInt = parseInt(revString);
  if(isNegative === -1) {
    revInt = revInt * -1;
  }
  return revInt;
}

const result = reverseInt(210);
console.log(result);
