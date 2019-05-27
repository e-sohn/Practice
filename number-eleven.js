// construct a hashtable

class Node {
    constructor(key, value){
        this.data = [key, value];
        this.next = null;
    }
    getKey(){
        return this.data[0];
    }
    getValue(){
        return this.data[1];
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    add(key, value){
        let newNode = new Node(key, value);
        if (this.head === null){
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
        return newNode;
    }
    delete(key){
        if (!this.head){
            return false;
        }
        else if (this.head.getKey() === key){
            let headNode = this.head;
            this.head = this.head.next;
            return headNode;
        }
        else {
            let current = this.head;
            while (current.next !== null){
                if (current.next.getKey() === key){
                    let deleteNode = current.next;
                    current.next = current.next.next;
                    return deleteNode;
                } 
                current = current.next;
            }
        }
        return false; 
    }
    search(key){
        let current = this.head;
        while (current !== null){
            if (current.getKey() === key){
                return current;
            }
            current = current.next;
        }
        return false; 
    }

}

class HashTable {
    constructor(size) {
        this.table = [];
        this.table.length = size;
    }

    hash(key) {
        const hashInt = key % 11;
        return hashInt;
    }

    insert(key, value) {
        let hash = this.hash(key);
        if (!this.table[hash]){
            this.table[hash] = new LinkedList();
            this.table[hash].add(key, value); 
        }
        else {
            let current = this.table[hash].head;
            if (current.getKey() === key){
                current.data[1] = value;
                return current;
            }
            while (current.next) {
                if (current.next.getKey() === key){
                    current.next.data[1] = value;
                    return current.next;
                }
                current = current.next;
            }
            current.next = new Node(key, value);
            return current.next;
        }
    }

    delete(key){
        let hash = this.hash(key);
        if (this.table[hash]){
            let deletedNode = this.table[hash].delete(key);
            if (deletedNode){
                return deletedNode;
            } 
            else {
                return -1;
            }
        }
        else {
            return -1;
        }
    }

    search(key){
        let hash =  this.hash(key);
        if (this.table[hash]){
            if (this.table[hash].search(key)){
                return this.table[hash].search(key);
            }
            else {
                return -1;
            }
        }
        else {
            return -1;
        }
    }
 
}

let newHash = new HashTable(11);
newHash.insert(1, "hello");
newHash.insert(2, "goodbye");
newHash.insert(12, "sisi");
newHash.insert(23, "woohoo");
let deleted1 = newHash.delete(1);
console.log(deleted1);
console.log(newHash.table[1].search(23));
