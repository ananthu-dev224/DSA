// Finding numbers that satisfy the target sum
// O(n2) Time and O(1) Space
// function sum (arr , target){
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 return [arr[i],arr[j]]
//             }
//         }
//     }
//     return []
// }

// const arr = [4,5,1,9,7]
// const target = 8
// const result = sum(arr,target)
// console.log(result);

// By hashset O(n) Time and Space
function sum(arr,target){
    let hashset = new Set()
    for(let i=0; i<arr.length; i++){
        let val = arr[i]
        let res = target - val
        if(hashset.has(res)){
            return [res,val]
        }else{
            hashset.add(val)
        }
    }
    return []
}

const arr = [4,5,7,9,1]
const target = 8
const result = sum(arr,target)
console.log(result);