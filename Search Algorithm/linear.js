// Linear Search Implementation
// O(n) Time Complexity

let arr = [1,3,4,2,10]
function linear(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log("The target is at index :",linear(arr,2));
