// Find the common elements of 2 int arrays

const findCommonEle = (arr1, arr2) => {
    let common = [];
    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                common.push(arr1[i]);
            }
        } 
    }
    return common;
}

const result = findCommonEle([1, 2, 3], [2, 3, 4]);
console.log(result);
// The most efficient method would be making a hashtable with the hashes of the smaller array, then iterating over the larger array to see if the larger array has the value contained inside of it
