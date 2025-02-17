function merge(leftArr, rightArr) {
    let sortedArr = [];

    while(leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        }
        else {
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const arr = [8, 20, -2, 4, -6];


console.log(mergeSort(arr));