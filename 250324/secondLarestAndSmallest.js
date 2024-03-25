// I tried two solutions

// brute force - Time complexity: O(nlogn) & Space complexity: O(n)

function secondLargestAndSmallest(arr) {
    let arrWithoutDuplicates = Array.from(new Set(arr));
    let sortedArr = arrWithoutDuplicates.sort();
    let arrLength = sortedArr.length;
    let secondLargest = sortedArr[arrLength-2];
    let secondSmallest = sortedArr[1];
    return `Second largest ${secondLargest} and second smallest ${secondSmallest}`;
}

// optimal solution

function optimalLargeSmall(arr) {
    if (arr.length < 2) {
        return -1;
    }

    // Infinity is the largest number and the -Infinity is the largest negative number
    // This helps us with the comparision factor for once setting the first array element
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        //for finding second largest and avoiding duplicates to be found as second largest
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
        //for finding second smallest
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }
    
    return `Second largest ${secondLargest} and second smallest ${secondSmallest}`;
}

const arr = [5,2,6,8,1,2,2,1,5,8,7,7,7,0,0,0];

console.log(secondLargestAndSmallest(arr));
console.log(optimalLargeSmall(arr));