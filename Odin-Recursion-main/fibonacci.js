// iteration solution

function fibIteration(n) {
    const baseArray = [0, 1];
    if(n <= 0) return 'Enter a number greater than 0';
    if(n === 1) return [0];
    if (n === 2) return baseArray;
    for(let i = 0; i < n - 2; i++) {
        baseArray.push(baseArray[baseArray.length - 2] + baseArray[baseArray.length - 1])
    }
    return baseArray;
}

// console.log(fibIteration(8));



// recursive solution

function fibRecursion(n) {
    if(n <= 0) return 'Please enter a number greater than 0';
    if(n === 1) return [0];
    if(n === 2) return [0, 1];
    resultArray = fibRecursion(n - 1)
    return [...resultArray, resultArray[resultArray.length - 1] + resultArray[resultArray.length - 2]]
}

console.log(fibRecursion(8))