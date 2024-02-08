// Pushing common values to end of array
const arr = [1, 2, 1, 4, 3, 1, 5, 1];

function commonValues(arr, target) {
    let targetCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }

            arr[arr.length - 1] = target;
            i--;
            targetCount++;
            if (targetCount === arr.length - i - 1) {
                break;
            }
        }
    }
    return arr;
}

const target = 1;
const log = commonValues(arr, target);
console.log(log);
