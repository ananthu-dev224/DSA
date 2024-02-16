
// Creating Node

class node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// Linked List

class singlyLinkedList {
    //  constructor for setting up default values
    constructor() {
        this.head = null;
    }



    // Adding a node at first / head
    addFirst(val) {
        let newNode = new node(val);
        newNode.next = this.head;
        this.head = newNode;
        return
    }


    // Adding a node last / tail 
    addLast(val) {
        let newNode = new node(val)
        if (!this.head) {
            this.head = newNode;
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next
        }

        current.next = newNode
    }

    addAfter(val, refVal) {
        let newNode = new node(val)
        let current = this.head
        while (current) {
            if (current.value === refVal) {
                newNode.next = current.next
                current.next = newNode
                return
            }
            current = current.next
        }
    }

    addBefore(val, refVal) {
        let newNode = new node(val)
        if (this.head.value === refVal) {
            newNode.next = this.head
            this.head = newNode
            return
        }
        let current = this.head
        while (current) {
            if (current.next.value === refVal) {
                newNode.next = current.next
                current.next = newNode
                return
            }
            current = current.next
        }
    }


    addByIndex(index, val) {
        if (index < 0 || index > this.length()) {
            console.error('Index is not valid')
        }

        let newNode = new node(val)
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
            return
        }

        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }

        newNode.next = current.next
        current.next = newNode

    }

    addMid(val) {
        let newNode = new node(val)
        let fast = this.head
        let slow = this.head
        while (fast.next && fast.next.next) { // Slow will be at the middle in case of odd numbers if even it will be pointing the first node of two middle nodes
            slow = slow.next
            fast = fast.next.next
        }

        newNode.next = slow.next
        slow.next = newNode

    }


    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return
        }
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }

    removeByIndex(index) {
        if (index < 0 || index > this.size()) {
            console.error('Invalid Index')
        }

        if (index === 0) {
            this.head = this.head.next
            return
        }

        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        if (current) {
            current.next = current.next.next
        }
    }

    length() {
        let count = 0
        let current = this.head
        while (current) {
            count++
            current = current.next
        }
        return count
    }

    // Displaying the values in linked list
    print(node = this.head) {
        if(node){
            console.log(node.value);
            this.print(node.next)
        }else{
           console.log("Length is :",this.length());
        }
    }

    reverse() {
        let current = this.head
        let prev = null
        let next = null
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    split(){
        let fast = this.head
        let slow = this.head
        while(fast.next !== null && fast.next.next !== null){
            slow = slow.next
            fast = fast.next.next
        }

        let secondHalf = new singlyLinkedList()
        secondHalf.head = slow.next
        slow.next = null
        
        let current = this.head
        while(current){
            console.log("First List :",current.value);
            current = current.next
        }

        let current2 = secondHalf.head
        while(current2){
            console.log("Second List :",current2.value);
            current2 = current2.next
        }
    }

    removeDupe(){ //From sorted list
        let current = this.head
        while(current !== null && current.next !== null){
            if(current.value === current.next.value){
                current.next = current.next.next
            }else{
                current = current.next
            }
        }
        return this.head
    }

}



let list = new singlyLinkedList()
list.addLast(1)
list.addLast(1)
list.addLast(1)
list.addFirst(2)
list.addByIndex(1, 1)
// list.addBefore(2, 100)
// list.addMid(46)
// list.addMid(1000000)
list.reverse()
list.removeDupe()
list.print()

 // Palindrome
 var isPalindrome = function (head) {
    if (head === null || head.next === null) return true;
    let fast = head
    let slow = head
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let reversed = reverseList(slow.next)
    slow = reversed

    while (slow) {
        if (head.val !== slow.val) return false;
        head = head.next
        slow = slow.next
    }
    return true
  };

  var reverseList = function (head) {
    let pre = null;
    let rem = null;
    while (head) {
        rem = head.next
        head.next = pre
        pre = head
        head = rem
    }
    return pre
  }