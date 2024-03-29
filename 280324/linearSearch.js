function linearSearch(element,arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return "Element does not found";
}

const arr = [1,2,3,4,5];

console.log(linearSearch(1,arr));
console.log(linearSearch(0,arr));
console.log(linearSearch(5,arr));
console.log(linearSearch(6,arr));