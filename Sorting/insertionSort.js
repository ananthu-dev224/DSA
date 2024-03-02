// Insertion Sorting

const arr = [45,23,12,44,1,9]

function insertionSort(arr){
     for(let i=0; i<arr.length; i++){
        const key = arr[i]
        let j = i-1
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
     }
     return arr
}

console.log(insertionSort(arr));


// Complexity Analysis
// Time
// Best Case - O(n)
// Worst Case - O(n^2)
// Average Case - O(n^2)
// Space
// O(1) Since we are not creating new array


//// JS Inbuilt sort() method in js ////
// When we use inbuilt .sort() method in js with arrays, array of strings will be sorted according to alphabetical order,
// But array of numbers will not be in correct ,bcz js converts those numbers to string and then sort
// So we use a compare function inside sort() => sort((a,b) => a - b) 