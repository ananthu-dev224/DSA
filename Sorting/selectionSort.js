// Selection Sorting

const arr = [2,1,9,4,5,2,6]

const selectionSort = (arr) => {
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}

console.log(selectionSort(arr));

// Complexity Analysis // 
// Time - O(n^2)
// Space - O(1)