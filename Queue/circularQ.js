// Unlike from normal queue circular queue has a fixed size. The rear part is connected towards the front so
// that it can form a circle.
// enqueue , dequeue , front , rear , isEmpty , isFull


let circularQueue = function(n){
     this.queue = []
     this.size = n
}

circularQueue.prototype.enqueue = function(elem){
     this.queue.push(elem)
}

circularQueue.prototype.dequeue = function(){
     if(this.queue.length === 0) return "Queue Underflow , cannot perform operation"
     this.queue.shift()
}

circularQueue.prototype.front = function(){
    
}
