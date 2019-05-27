// reverse a linked list 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList { 
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    delete() {
        let current = this.head;
        if(!current.next) {
            this.head = null;
        } else {
            while(current.next.next) {
                current = current.next;
            }
            current.next = null;
        }
    }
    length() {
        let len = 1,
            current = this.head;
        while(current.next) {
            current = current.next;
            len += 1;
        }
        return len;
    }
    reverse() {
        let len = this.length();
        if(len === 1) {
            return false;
        }
        let currentVal = this.head;
        let nextVal = this.head.next;
        let nextnextVal = this.head.next.next;
        currentVal.next = null;
        for(let i=0; i<len-1; i++) {
            nextVal.next = currentVal;
            currentVal = nextVal;
            nextVal = nextnextVal;
            if(i !== len-2) {
                nextnextVal = nextnextVal.next;
            }
        }
        this.head = currentVal;
        return true;
    }
}

const link1 = new LinkedList();
link1.add(5);
link1.add(10);
link1.add(20);
link1.reverse();
console.log(link1.head);
