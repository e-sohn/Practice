// Reverse a String iteratively and recursively

const reverseStringIterative = (string) => {
    let newString = '';
    for(let i=string.length-1; i>=0; i--) {
        newString = newString + string[i];
    }
    return newString;
}

const result = reverseStringIterative('Hello');
console.log(result);
        
const reverseStringRecursive = (string) => {
    if(string.length === 1) {
        return string;
    } else {
        return string[string.length-1] + reverseStringRecursive(string.slice(0, string.length-1));
    }
}

const resultTwo = reverseStringRecursive('Hello');
console.log(resultTwo);
        
