class Stack{
    constructor(){
        this.items = [] 
    }

    addElement(element){
        this.items.push(element);
        console.log(`${element} pushed into stack`);
    }

    removeElement(){
        const poppedElement = this.items.pop();
        return poppedElement;
    }

    peek(){
        const element = this.items[this.items.length - 1];
        return element;
    }
 
    displayItems(){
        let items = '';
        for(let i =0;i < this.items.length; i++){
            items += this.items[i] + " ";
        }
        return items;
    }
}

const stack = new Stack();

stack.addElement(2);
stack.addElement(4);
stack.addElement(6);
stack.addElement(8);

console.log(stack.displayItems());

stack.removeElement();
console.log(stack.peek());
console.log(stack.displayItems());