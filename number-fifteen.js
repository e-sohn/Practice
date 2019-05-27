// Check if a string is composed of all unique characters

const checkUnique = (string) => {
  for(let i=0; i<string.length-1; i++) {
    for(let j=i+1; j<string.length; j++) {
      if(string[i] === string[j]) {
        return false;
      }
    } 
  }
  return true;
}

const result = checkUnique('Helortyas');
console.log(result);

// More efficient solution is to store in hash and then check
