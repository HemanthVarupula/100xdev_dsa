function zeroAtEnd(arr) {
    let zeroArr = [];
    let arrayLength = arr.length;
    for (let i = 0; i < arrayLength; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
            arr.splice(i,1);
            i--;
        }
    }
    return arr.concat(zeroArr);
}

const arr = [0,0,0,0,0,1,0,2,0,3,5,4];

console.log(zeroAtEnd(arr));