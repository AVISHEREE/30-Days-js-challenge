class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        const pusedElement = this.items.push(element);
        return `${pusedElement} pushed`
    }

    dequeue(){
        if(this.items.length === 0)return `queue empty`
        const element = this.items.shift()
        return `${element}`
    }

    veiwFront(){
        console.log(this.items[0]);
    }
}

const q = new Queue();
q.enqueue(2)
q.enqueue(4)
q.enqueue(6)
q.enqueue(8)
console.log(q.items);
q.dequeue();
q.dequeue();
console.log(q.items);
q.veiwFront();
