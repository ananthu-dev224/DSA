var majorityElement = function(nums) {
    let obj = {}
    for(let num of nums){
        if(obj[num]){
            obj[num]++
        }else{
            obj[num] = 1
        }
    }
    let maxCount = 0
    let majorityElement
    for(let key in obj){
        if(obj[key] > maxCount){
            maxCount = obj[key]
            majorityElement = key
        }
    }
    return majorityElement
};

let arr = [1,2,1,2,3]
console.log(majorityElement(arr));