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

