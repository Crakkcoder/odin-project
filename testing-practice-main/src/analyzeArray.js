export function analyzeArray(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length;
    let average = Math.round(
        array.reduce((curr, total) => curr + total, 0) / length
    );
    return { average, min, max, length };
}
