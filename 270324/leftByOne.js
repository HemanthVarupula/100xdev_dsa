function leftByOne(arr,n) {
    if ( arr.length < 2) {
        console.log(arr[0]);
        return;
    }
    let temp = arr[0];
    for (let i = 0; i < n-1; i++) {
        arr[i] = arr[i+1];
    }
    arr[n-1] = temp;
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}

leftByOne([4],3);