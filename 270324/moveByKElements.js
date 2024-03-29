function moveElementsLeftOrRight(arr,k,direction) {
    const n = arr.length;

    if (direction === "left") {
        return arr.slice(k).concat(arr.slice(0,k));
    } else if (direction === "right") {
        return arr.slice(n-k).concat(arr.slice(0, n-k));
    } else {
        return "Invalid direction";
    }
}

const arr = [1,2,3,4,5];

console.log(moveElementsLeftOrRight(arr,2,"left"));
console.log(moveElementsLeftOrRight(arr,2,"right"));