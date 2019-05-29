// Find number that only belongs to one array

const findNum = (arr1, arr2) => {
  //sort both arrays
  let newArray = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  while(arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if(arr1[arr1Pointer] > arr2[arr2Pointer]) {
      newArray.push(arr2[arr2Pointer]);
      arr2Pointer++;
    } else if(arr1[arr1Pointer] < arr2[arr2Pointer]) {
      newArray.push(arr1[arr1Pointer]);
      arr1Pointer++;
    } else {
      arr1Pointer++;
      arr2Pointer++;
    }
  }
  if(arr1Pointer !== arr1.length) {
    for(let i=arr1Pointer; i<arr1.length; i++) {
      newArray.push(arr1[i]); 
    }
  } else if(arr2Pointer !== arr2.length) {
    for(let i=arr2Pointer; i<arr2.length; i++) {
      newArray.push(arr2[i]); 
    }
  }
  return newArray;
}

const result = findNum([1, 2, 3, 10, 12], [3, 4, 5]);
console.log(result);
