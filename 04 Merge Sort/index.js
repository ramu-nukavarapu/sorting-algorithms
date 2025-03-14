function mergeSort(arr, low, high) {
    if (low >= high) {
        return
    }
    let mid = Math.floor((low+high)/2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid+1, high)
    merge(arr, low, mid, high)
}

function merge(arr, low, mid, high) {
    let i = low, j = mid + 1, k = low;

    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            i++;
        } else {
            let value = arr[j];
            let index = j;

            while (index > i) {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[i] = value;

            i++;
            j++;
            mid++;
        }
    }
}

let arr = [12, 11, 13, 5, 6, 7];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);