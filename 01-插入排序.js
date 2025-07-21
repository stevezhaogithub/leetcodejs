function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // 将 key 插入到已排序的部分
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let numbers = [10, 14, 7, 3, 2, 5, 1, 9, 6, 4];
let results = insertionSort(numbers);
console.log(results);

