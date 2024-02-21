// Merge Sorting

let arr = [3,10,1,5,90,2,0]

function mergeSort(arr) { // O(log n) as we are dividing array every time
    if(arr.length <= 1) return arr;
    let mid = Math.round(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    
    return merge(left,right)
}


function merge(left,right){ // O(n) as we are checking every elements
    let sortedArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr,...left,...right]
}

console.log(mergeSort(arr));

// Complexity Analysis
// Time - O(n log n) for all cases
// Space - O(n) bcz a new array is created

