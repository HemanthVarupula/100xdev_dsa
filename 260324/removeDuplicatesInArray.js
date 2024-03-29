// two methods


// bruteforce TC: O(n^2)

function removeDuplicate(arr) {
    let filteredArr = [];
    arr.forEach( item => {
        if (!filteredArr.includes(item)) {
            filteredArr.push(item);
        }
    })
    return filteredArr;
}

// Optimal  TC: O(n)

function removeDuplicateOptimal(arr) {
    return Array.from( new Set(arr));
}

const arr = [1,2,2,3,4,5,5,5,2,1,1,2];

console.log(removeDuplicate(arr));
console.log(removeDuplicateOptimal(arr));