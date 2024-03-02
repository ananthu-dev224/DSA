// Bubble Sorting
// Make an array to ascending order

let arr = [44,1,78,100,4,2,8,3,66,10]

const bubbleSort = (arr) => {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr));

const bubbleSortWhile = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
            
        }
    } while (swapped);
    return arr
}

console.log(bubbleSortWhile(arr));

// Complexity Analysis //
// Time
// Best Case - O(n)
// Worst Case - O(n^2)
// Average Case - O(n^2)
// Space
// O(1)



