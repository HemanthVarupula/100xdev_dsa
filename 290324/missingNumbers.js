// solution one

function missingNumbers(arr) {
    let cleanArr = Array.from(new Set(arr)).sort();
    let smallest = cleanArr[0];
    let largest = cleanArr[arr.length-1];
    let finalArr = [];
    for (let i=smallest; i<=largest; i++) {
        finalArr.push(i);
    }
    return finalArr.filter(item => !arr.includes(item));
}

// solution two

function missingNumbersOpt(arr) {
    let smallest = Math.min(...arr);
    let largest = Math.max(...arr);
    let rangeSet = new Set();
    for (let i=smallest; i<=largest; i++) {
        rangeSet.add(i);
    }
    for (let num of arr) {
        rangeSet.delete(num);
    }
    return Array.from(rangeSet);
}

const arr = [-5,0,2,9];

console.log(missingNumbers(arr));
console.log(missingNumbersOpt(arr));