function quickSort(arr, low, high) {
    if (low < high) {
        let partitionIndex = partition(arr, low, high)
        quickSort(arr, low, partitionIndex-1)
        quickSort(arr, partitionIndex+1, high)
    }
}

function partition(arr, low, high){
    let pivot = arr[low]
    let i = low+1
    let j = high

    while (i <= j) {
        while (i <= high && pivot >= arr[i]) {
            i++
        }

        while (j >= low && pivot < arr[j]) {
            j--
        }
        
        if(i < j){
            swap(arr, i, j)
        }
    }
    swap(arr, low, j)
    return i
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [12, 11, 13, 5, 6, 7];
quickSort(arr, 0, arr.length - 1);
console.log(arr);