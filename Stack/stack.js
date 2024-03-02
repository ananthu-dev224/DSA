// Stack Implementation

class Stack {
    constructor(){
        this.stack = []
    }

    push(elem){
      this.stack.push(elem)
    }

    pop(){
       if(this.isEmpty()) return "Stack is Empty"
       this.stack.pop()
    }

    peek(){
        if(this.isEmpty()) return "Stack is Empty"
        return this.stack[this.size() - 1]
    }

    size(){
       return this.stack.length
    }

    isEmpty(){
       return this.size() === 0
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.peek());

// Cover the Applications of Stack over Array , Linked List

// Stack By Linked List
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class StackLL {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    push(data) {
      const newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    pop() {
      if (!this.isEmpty()) {
        const poppedNode = this.top;
        this.top = poppedNode.next;
        this.size--;
        return poppedNode.data;
      } else {
        console.log("Stack is empty");
        return null;
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.top.data;
      } else {
        console.log("Stack is empty");
        return null;
      }
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    printStack() {
      let currentNode = this.top;
      while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  }
  
  // Example usage:
  const stackll = new StackLL();
  stackll.push(1);
  stackll.push(2);
  stackll.push(3);
  console.log("Size of stack:", stackll.getSize()); // Output: 3
  console.log("Top of stack:", stackll.peek()); // Output: 3
  stackll.pop(); // Removes 3
  stackll.printStack(); // Output: 2, 1
  
