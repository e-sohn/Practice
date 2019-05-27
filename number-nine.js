// implement bubble sort

const swap = (array, pos1, pos2) => {
    let ele1 = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = ele1;
}

const bubbleSort = (array) => {
    let swapped = false;
    let end = array.length-1;
    do { 
        swapped = false;
        for(let i=0; i<end; i++) {
            if(array[i] > array[i+1]) {
                swap(array, i, i+1);
                swapped = true;
            }
        }
        end -= 1;
    } while(swapped);
    return array;
}

const result = bubbleSort([4, 3, 5, 7, 3, 2, 10, 2, 1]);
console.log(result);
             
const insertionSort = (array) => {
    for(let i=0; i<array.length; i++) {
        let element = array[i];
        let j = i - 1;
        for(j; j>= 0 && array[j] > element; j--)  {
            array[j+1] = array[j];       
        }
        array[j+1] = element;
    }
    return array;
}

const result2 = insertionSort([4, 3, 5, 7, 3, 2, 10, 2, 1]);
console.log(result2);
