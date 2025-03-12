// It sets the element as it has to be
// Uses shifting until the element reaches it's sorted position

function insertionSort(array) {
    for (let index = 1; index < array.length; index++) {
        for (let ind = index; ind > 0; ind--) {
            if (array[ind] < arr[ind-1]){
                let temp = array[ind]
                array[ind] = array[ind-1]
                array[ind-1] = temp
            }
        }
    }
}

arr = [5,4,3,2,1]

console.log(arr)
insertionSort(arr)
console.log(arr)