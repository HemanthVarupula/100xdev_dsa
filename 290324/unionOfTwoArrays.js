// solution one

function unionArrays(arr1,arr2) {
    let combArr = arr1.concat(arr2);
    let finalArr = [];
    combArr.forEach(item => {
        if (!finalArr.includes(item)) {
            finalArr.push(item);
        }
    });
    return finalArr;
}

// solution two

function unionArraysOpt(arr1, arr2) {
    let set = new Set(arr1);
    arr2.forEach(item => set.add(item));
    return Array.from(set);
}


const arrayOne = [1,2,3,4,4,4,4];
const arrayTwo = [3,4,5,6,0,0,0];

console.log(unionArrays(arrayOne,arrayTwo));
console.log(unionArraysOpt(arrayOne,arrayTwo));
