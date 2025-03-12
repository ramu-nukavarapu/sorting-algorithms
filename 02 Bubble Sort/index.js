// The largest number sorted first
// Uses adjacent swaps

function bubbleSort(array) {
    for (let index = array.length-1; index >= 0 ; index--) {
        for (let ind = 0; ind < index; ind++) {
            if (array[ind]  > array[ind+1]) {
                let temp = array[ind]
                array[ind] = array[ind+1]
                array[ind+1] = temp
            }
        }
    }
}

arr = [5,4,3,2,1]

console.log(arr)
bubbleSort(arr)
console.log(arr)