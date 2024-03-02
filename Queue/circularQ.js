// Unlike from normal queue circular queue has a fixed size. The rear part is connected towards the front so
// that it can form a circle.
// enqueue , dequeue , front , rear , isEmpty , isFull
// Leetcode 622


let circularQueue = function(n){
     this.queue = []
     this.size = n
}

circularQueue.prototype.enqueue = function(elem){
    if(this.queue.length === this.size()) return "Queue Overflow"
     this.queue.push(elem)
}

circularQueue.prototype.dequeue = function(){
     if(this.queue.length === 0) return "Queue Underflow , cannot perform operation"
     this.queue.shift()
}

circularQueue.prototype.front = function(){
    if(this.queue.length === 0) return "Queue Underflow , cannot perform operation"
    return this.queue[0]
}

circularQueue.prototype.rear = function(){
    if(this.queue.length === 0) return "Queue Underflow , cannot perform operation"
    return this.queue[this.queue.length-1]
}

circularQueue.prototype.isEmpty = function(){
    if(this.queue.length === 0) {
        return true
    }else{
        return false
    }
}

circularQueue.prototype.isFull = function(){
    if(this.queue.length === this.size) {
        return true
    }else{
        return false
    }
}
