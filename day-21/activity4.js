class Node{
    constructor(value,pointer = null){
        this.data = value;
        this.pointer = pointer
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addData(data){
        this.head = new Node(data,this.head)
    }

    displayLL(){
        console.log(this.head);
    }

    displayData(){
        let firstHead = this.head;
        while(firstHead){
            console.log(firstHead.data);
            firstHead = firstHead.pointer
        }
    }
    
}

let newLinkedList1 = new LinkedList()
newLinkedList1.addData(1);
newLinkedList1.addData(2);
newLinkedList1.addData(3);
newLinkedList1.addData(4);
newLinkedList1.displayData();
newLinkedList1.displayLL();

