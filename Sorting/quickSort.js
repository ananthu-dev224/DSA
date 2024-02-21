// Quick Sorting

let arr = [3,10,1,5,90,2,0]

function qSort(arr){
    if(arr.length <= 1) return arr;
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i<arr.length; i++){
       if(arr[i] < pivot){
        left.push(arr[i])
       }else{
        right.push(arr[i])
       }
    }

    return [...qSort(left),pivot,...qSort(right)]
}

console.log(qSort(arr));

// Complexity Analysis

// Time
// Best Case - O(nlog n)
// Average Case - O(nlog n)
// Worst Case - O(n^2) //This happens when the smallest element will occupy last in every array when split

// Space
// Worst Case - O(n)
// Average Case - O(log n)



