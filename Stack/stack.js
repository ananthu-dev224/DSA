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
stack.pop()
stack.pop()
stack.pop()
console.log(stack.peek());

// Cover the Applications of Stack over Array , Linked List
