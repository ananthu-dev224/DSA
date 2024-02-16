
function sum(num){
    let s =  0
    if(num === 0){
        return num
    }  
   s = num + sum(num - 1)
   return s
}

let res = sum(5)
console.log(res);


// Indirect Recursion
function isEven(n) {
    if (n === 0)
        return true;
    else
        return isOdd(n - 1);
}

function isOdd(n) {
    if (n === 0)
        return false;
    else
        return isEven(n - 1);
}

console.log(isEven(3)); 
console.log(isOdd(5)); 

// Factorial using indirect recursion
function f1(num){
    if(num <= 1) return 1;
    return num * f2(num - 1)
}

function f2(num){
    if(num<=1) return 1;
    return num * f1(num-1)
}

let fact = f1(5)
console.log(fact);

function factorial(n){
    if(n===0){
        return 1
    }
    return n * factorial(n-1)
}
let factorialRes = factorial(5)
console.log(factorialRes);

// Fibonacci series
function fib(n){
    if(n<=1){
        return n;
    }
    return fib(n-1) + fib(n-2)
}
let fibRes = fib(10)
console.log(fibRes);

// Power of number
function power(n,p){
    if(n==1){
        return true
    }else if(n%p !== 0 || n === 0){
        return false
    }

    return power(n/p,p)
}
console.log(power(27,3));


// Linear Search in Recursion
let arr = [1,2,3,4,5]
function lSearch(arr,target,index=0){
    if(target === arr[index]){
        return index
    }
    if(index >= arr.length) return -1;

    return lSearch(arr,target,index+1)
}

console.log("Index of target is :",lSearch(arr,5));


// Binary Search in Recursion
function bSearch(nums,target,start=0,end=nums.length-1){
    let middle = Math.floor((start+end)/2)
    if(nums[middle] === target){
        return middle
    }else if(nums[middle] > target){
        return bSearch(nums,target,start,middle-1)
    }else if(nums[middle] < target){
        return bSearch(nums,target,middle+1,end)
    }
}

console.log(bSearch(arr,5));