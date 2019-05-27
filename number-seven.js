// Implement a queue with queue and dequeue functions

class Node {
    constructor(data, next = null, previous = null) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue(data) {
        const newNode = new Node(data);
        let current = this.head;
        if(!this.head) {
            this.head = newNode;
        } else {
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.previous = current;
        }
        this.tail = newNode;
    }
    dequeue() {
        let head = this.head;
        this.head = this.head.next;
        this.head.previous = null;
        return head;
    }
}

const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
const item = queue1.dequeue();
console.log(item);
console.log(queue1.head);
console.log(queue1.head.next);
