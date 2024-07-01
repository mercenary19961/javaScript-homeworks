function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Find the minimum element in the remaining unsorted array
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap the found minimum element with the first element
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}
let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log("Sorted array:", arr);