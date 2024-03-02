// Queue Implementation

class Queue {
    constructor(){
        this.items = []
    }

    enqueue(elem){
        this.items.push(elem)
    }

    dequeue(){
        if(this.isEmpty()) return "Underflow , cannot perform dequeue"
        this.items.shift()
    }
    
    size(){
        return this.items.length
    }

    front(){
       if(this.isEmpty()) return "Queue is empty"
       return this.items[0]
    }

    isEmpty(){
        return this.size() === 0
    }

    print(){
        let queue = ''
        for (let i = 0; i < this.size(); i++) {
            queue += this.items[i] + ' '
        }
        console.log(queue);
    }
}

let q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.dequeue()
q.print()
console.log(q.front());

// Queue by Linked List

class QNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class QueueLL {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
    enqueue(data) {
      const newNode = new QNode(data);
      if (this.isEmpty()) {
        this.front = newNode;
      } else {
        this.rear.next = newNode;
      }
      this.rear = newNode;
      this.size++;
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        const dequeuedNode = this.front;
        this.front = dequeuedNode.next;
        if (this.front === null) {
          this.rear = null;
        }
        this.size--;
        return dequeuedNode.data;
      } else {
        console.log("Queue is empty");
        return null;
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.front.data;
      } else {
        console.log("Queue is empty");
        return null;
      }
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    printQueue() {
      let currentNode = this.front;
      while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  }
  
  // Example usage:
  const queue = new QueueLL();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log("Size of queue:", queue.getSize()); // Output: 3
  console.log("Front of queue:", queue.peek()); // Output: 1
  queue.dequeue(); // Removes 1
  queue.printQueue(); // Output: 2, 3
  

