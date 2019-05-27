// Find the first non-repeated character in a String

const findFirstNonRepeat = (string) => {
    let numberRepeat = 0;
    for(let i=0; i<string.length; i++) {
        if(string[i] !== string[i+1] && numberRepeat === 0) {
            return string[i];  
        } else if (string[i] !== string[i+1] && numberRepeat > 0) {
            numberRepeat = 0;
        } else if(string[i] === string[i+1]) {
            numberRepeat += 1;
        } else if(i === string.length && numberRepeat === 0) {
            return string[i];
        }
    }
    return false;
}

let result = findFirstNonRepeat('HHHHeelllo');
console.log(result);
