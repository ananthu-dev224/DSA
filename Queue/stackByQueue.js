// Implement LIFO Stack by using two queues
// push , pop , peek , isEmpty , size
// Leetcode 225

let stackByQueue = function(){
    this.q1 = []
    this.q2 = []
}

stackByQueue.prototype.push = function(elem){
     while(this.q1.length !== 0){    //[_,1]
           this.q2.push(this.q1.shift()) //[1]
     }
     this.q1.push(elem) //[2]
     while(this.q2.length !== 0){
        this.q1.push(this.q2.shift()) //[2,1]
     }
}

stackByQueue.prototype.pop = function(){
    this.q1.shift()
}

stackByQueue.prototype.peek = function(){
    return this.q1[0]
}

stackByQueue.prototype.isEmpty = function(){
    return this.q1.length === 0
}


let stack = new stackByQueue()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek( ));


