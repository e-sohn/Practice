// Implement a linked list with insert and delete functions

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(data, index) {
        const newNode = new Node(data);
        let i = 0;
        if(!this.head) {
            this.head = newNode;
        } else if(i === index) {
            let prevHead = this.head;
            this.head = newNode;
            this.head.next = prevHead; 
        } else {
            i++;
            let current = this.head;
            while(current.next && i !== index) {
                current = current.next;
                i++;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
    }
    delete(index) {
        let current = this.head;
        let i = 1;
        if(index === 0) {
            this.head = this.head.next;
        } else {
            while(i !== index) {
                current = current.next;
                i++;
            }
            current.next = current.next.next; 
        }
    }
}

const link1 = new LinkedList();
link1.insert(10, 0);
link1.insert(9, 1);
link1.insert(8, 2);
link1.insert(7, 3);
link1.insert(25, 1);
console.log(link1.head);
console.log(link1.head.next);
console.log(link1.head.next.next);
link1.delete(1);
console.log(link1.head.next);
link1.delete(2);
console.log(link1.head.next);
console.log(link1.head.next.next);
