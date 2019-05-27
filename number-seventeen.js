// Reverse a string iteratively and recursively

const reverseStringRec = (string) => {
  if(string.length === 1) {
    return string;
  } else {
    return string[string.length-1] + reverseStringRec(string.slice(0, string.length-1));
  }
}

const result = reverseStringRec('Hello');
console.log(result);

const reverseStringIt = (string) => {
  let reverseString = '';
  for(let i=string.length-1; i>= 0; i--) {
    let lastLet = string[i];
    reverseString = reverseString + lastLet;
  }
  return reverseString;
}

const result2 = reverseStringIt('Hello');
console.log(result2);

