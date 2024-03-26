function checkSortedArray(arr) {
    let isSorted = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            isSorted = false;
        }
    }
    return isSorted;
}

const arrOne = [1,2,3,4,5];
const arrTwo = [2,3,1,5,4];

console.log(checkSortedArray(arrOne));
console.log(checkSortedArray(arrTwo));