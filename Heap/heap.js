// Heaps : They are binary tree , Heap is one efficient implementation of an abstract data structure called a priority queue.

// Left Child : i * 2
// Right Child : (i * 2) + 1
// Parent : round of i / 2


// Min Heap Implementation

class minHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {  // pass the index of the value and returns the index of parent of value
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index) {
        return (index * 2) + 1
    }

    getRightChildIndex(index) {
        return (index * 2) + 2
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    buildHeap(arr) { // building min heap
        this.heap = [...arr]
        for (i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapifyDown(i)
        }
    }

    insert(data) {
        this.heap.push(data)
        this.heapifyUp(this.heap.length - 1)
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()

        let root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root;
    }

    heapifyUp(index) { // Bottom to Top
        let currentIndex = index
        while (currentIndex > 0) {
            let parentIndex = this.getParentIndex(currentIndex)
            if (this.heap[parentIndex] > this.heap[currentIndex]) {
                this.swap(currentIndex, parentIndex)
                currentIndex = parentIndex
            } else {
                break;
            }
        }
    }

    heapifyDown(index) { // Top to Bottom
        let smallestIndex = index;
        const size = this.heap.length;

        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)

            if (leftChildIndex < size && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < size && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex === index) break;

            this.swap(index, smallestIndex)
            index = smallestIndex;
        }

    }




}

let heap = new minHeap()
heap.insert(99)
heap.insert(30)
heap.insert(1)
heap.insert(50)
heap.insert(15)
heap.insert(40)
let rem = heap.remove()
let rem2 = heap.remove()
let rem3 = heap.remove()
console.log(rem2);

function heapSort(arr) {
    let heap = new minHeap()
    arr.forEach(element => {
        heap.insert(element)
    });
    let sorted = []
    while (heap.heap.length > 0) {
        sorted.push(heap.remove())
    }

    return sorted;

}
let arr = [8, 5, 0, 99, 1, 2]
console.log(heapSort(arr));



// Max heap Implementation || Descending order of values top to bottom


class maxHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index) {
        return (index * 2) + 1;
    }

    getRighChildIndex(index) {
        return (index * 2) + 2
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
    }

    buildHeap(arr) {
        this.heap = [...arr]
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i)
        }

        return this.heap;
    }

    insert(val) {
        this.heap.push(val)
        this.heapifyUp(this.heap.length - 1)
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()
        
       let removed = this.heap[0]
       this.heap[0] = this.heap.pop()
       this.heapifyDown(0)
       return removed;
    }


    heapifyUp(index) {
        let currentIndex = index;
        while (currentIndex > 0) {
            let parentIndex = this.getParentIndex(currentIndex)
            if (this.heap[parentIndex] < this.heap[currentIndex]) {
                this.swap(currentIndex, parentIndex)
                currentIndex = parentIndex
            } else {
                break;
            }
        }
    }

    heapifyDown(index) {
        let largestIndex = index
        let size = this.heap.length
        while (true) {
            let leftChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRighChildIndex(index)

            if (leftChildIndex < size && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex
            }

            if (rightChildIndex < size && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex
            }

            if (index === largestIndex) break;

            this.swap(index, largestIndex)
            index = largestIndex
        }
    }


}

let Xheap = new maxHeap()
Xheap.insert(99)
Xheap.insert(30)
Xheap.insert(1)
Xheap.insert(50)
Xheap.insert(15)
Xheap.insert(40)
let Xrem = Xheap.remove()
let Xrem2 = Xheap.remove()
let Xrem3 = Xheap.remove()
console.log(Xrem3);

function XheapSort(arr) {
    let heap = new maxHeap()
    arr.forEach(element => {
        heap.insert(element)
    });
    let sorted = []
    while (heap.heap.length > 0) {
        sorted.push(heap.remove())
    }

    return sorted;

}
let arr2 = [8, 5, 0, 99, 1, 2]
console.log(XheapSort(arr2));
// let arr5 = [10,4,99,3,0]
// console.log(heap.buildHeap(arr));










