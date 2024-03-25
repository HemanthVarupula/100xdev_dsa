// I tried to write two types of solutions

// brute force - Time complexity: O(nlogn) & Space complexity O(1)

function optimalFindTheLargest(arr) {
    return arr.sort().pop();
}


// optimal solution - Time complexity: O(n) & Space complexity O(1)

function findTheLargest(arr) {
    let highest = arr[0];

    for (let i = 1; i < arr.length; i++ ) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }

    return highest;
}

const arr = [1,5,8,6,5,4,2];

console.log(findTheLargest(arr));
console.log(optimalFindTheLargest(arr));