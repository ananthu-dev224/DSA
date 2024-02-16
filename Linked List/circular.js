class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Method to insert a new node at the end of the list
    insert(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Make the new node point to itself
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    // Method to display the circular linked list
    display() {
        let current = this.head;
        if (!current) {
            console.log("List is empty");
            return;
        }
        console.log("Circular Linked List:");
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }
}

// Example usage:
const circularLinkedList = new CircularLinkedList();
circularLinkedList.insert(1);
circularLinkedList.insert(2);
circularLinkedList.insert(3);
circularLinkedList.display();
