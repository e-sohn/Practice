// Implement a stack with push and pop functions

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }
    push(data) {
        const newNode = new Node(data);
        let currentNode = this.head;
        if(!this.head) {
            this.head = newNode;
        } else {
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
    pop() {
        let currentNode = this.head;
        if(!this.head) {
            return false;
        } else if(!this.head.next) {
            let value = this.head;
            this.head = null; 
            return value;
        } else {
            while(currentNode.next.next) {
                currentNode = currentNode.next;
            }
            let value = currentNode.next;
            currentNode.next = null;
            return value;
        }
    } 
}

const stack1 = new Stack();
stack1.push(5);
stack1.push(10);
stack1.push(12);
let head = stack1.head;
console.log(head);
console.log(head.next);
console.log(head.next.next);
let pop = stack1.pop();
let pop2 = stack1.pop();
console.log(pop);
console.log(pop2);
head = stack1.head;
console.log(head);
console.log(head.next);
