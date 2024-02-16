class node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    addLast(val){
        let newNode = new node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode   
    }

    display(){
        let current =  this.head
        while(current){
            console.log(current.val);
            current = current.next
        }
    }
}
    
let list =  new doublyLinkedList()
list.addLast(1)
list.addLast(2)
list.addLast(3)
list.display()