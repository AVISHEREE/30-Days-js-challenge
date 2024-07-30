class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addNode(nodeData) {
        const newNode = new Node(nodeData);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    removeNode() {
        if (this.head === null) return null;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.size--;
    }

    displayNodes() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.addNode(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);
list.addNode(500);
list.addNode(600);

console.log("List after adding nodes: ");
list.displayNodes();
console.log();

list.removeNode();
list.removeNode();

console.log("List after removing nodes: ");
list.displayNodes();
