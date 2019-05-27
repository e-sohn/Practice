// Find the most frequent integer in an array

const findMostFrequent = (array) => {
    let freq = 0;
    let mostFreq = 0;
    let mostFreqInt = [];
    for(let i=0; i<array.length-1; i++) {
        freq = 0;
        for(let j=i+1; j<array.length; j++) {
            if(array[i] === array[j]) {
                freq += 1; 
            }
        }
        if(freq > mostFreq) {
            mostFreq = freq;
            mostFreqInt = [];
            mostFreqInt.push(array[i]); 
        } 
        else if(freq === mostFreq) {
            mostFreqInt.push(array[i]);
        }
    }

    return mostFreqInt;
}

let number = findMostFrequent([4, 3, 3, 1, 2, 4, 3, 2, 1, 2, 5, 6, 3]);
console.log(number);

        
