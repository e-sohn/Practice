// Determine if 2 Strings are anagrams

const areStringAnagrams = (string1, string2) => {
    for(let i=0; i<string1.length; i++) {
        for(let j=0; j<string2.length; j++) {
            if(j === string2.length-1 && string1[i] !== string2[j]) {
                return false;
            } else if(string1[i] === string2[j]) {
                string2 = string2.replace(string2[j], "");
                break;
            }
        } 
    }
    return true;
}

const result = areStringAnagrams('racecar', 'ceraarc');
console.log(result);

const breakLoop = (array1, array2) => {
    for(let i=0; i<array1.length; i++) {
        for(let j=0; j<array2.length; j++) {
            if(1 === 1) {
                break;
            }
        } 
        console.log('hello');
    }
}

breakLoop([1, 2, 3], [1, 2, 3, 4]);
