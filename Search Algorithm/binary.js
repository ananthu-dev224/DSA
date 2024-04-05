// Binary Search Implementation
// O(log n) Time Complexity as it is dividing the search area into half every time

let arr = [1,2,3,4,5,6,7,8,9]
function binary(arr,target){
    let start = 0
    let end = arr.length - 1
    while(start <= end){
        let middle = Math.floor((start+end)/2)
        if(arr[middle] === target) return middle; 
        if(arr[middle] < target){
            start = middle + 1
        }else{
            end = middle -  1
        }
    }
    return "Not found"
}

console.log("The index of target is :",binary(arr,4));