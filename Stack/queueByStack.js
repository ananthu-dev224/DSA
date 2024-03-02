// Implement FIFO Queue by using two stacks
// enqueue , dequeue , front , isEmpty
 

let queueByStack = function(){
    this.stack1 = []
    this.stack2 = []
}

queueByStack.prototype.enqueue = function(elem){
    return this.stack1.push(elem)  
}

queueByStack.prototype.dequeue = function(){
    if(this.isEmpty()) return "Queue Underflow"
    if(this.stack2.length === 0){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
        }
    }

    return this.stack2.pop()
}

queueByStack.prototype.front = function(){
    if(this.isEmpty()) return "Queue Underflow"
    if(this.stack2.length === 0){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
        }
    }

    return this.stack2[this.stack2.length-1]
}

queueByStack.prototype.isEmpty = function(){
    return this.stack1.length === 0 && this.stack2.length === 0
}

let queue = new queueByStack()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
console.log(queue.front());