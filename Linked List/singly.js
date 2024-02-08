 
//Creating Node
 
 class node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
 }

//Linked List
class singlyLinkedList {
    //  constructor for setting up default values
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adding a node with value and next reference
    add(val){
        let newNode = new node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }

    // Removing a node by passing that  value
    remove(val){
       let current = this.head;
       let previous = null;
       
    }

    // Displaying the values in linked list
    print(){
        let current = this.head
        while(current){
            console.log(current.value);
            current = current.next
        }
        console.log(this.length);
    }
}

let list = new singlyLinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(9)
list.add(10)
list.print()