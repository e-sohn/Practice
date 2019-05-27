// Implement merge sort

const mergeSort = (array) => {
    if(array.length === 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (arr1, arr2) => {
    const  result = [];

    while(arr1.length && arr2.length) {
        if(arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    return result.concat(arr1, arr2);
}

const result = mergeSort([2, 4, 3, 5, 7, 6]);
console.log(result);
