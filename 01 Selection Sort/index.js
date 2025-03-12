// The smallest number sorted first
// Uses one swap after the inner iteration done

function selectionSort(arr){
    for (let index = 0; index < arr.length-1; index++) {
        let minIndex = index;
        for (let ind = index+1; ind < arr.length; ind++) {
            if (arr[minIndex] > arr[ind]) {
                minIndex = ind
            }
        }
        if(index != minIndex){
            let temp = arr[index]
            arr[index] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
}

arr = [5,4,3,2,1]

console.log(arr)
selectionSort(arr)
console.log(arr)