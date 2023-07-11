(()=>{

    class Node {
        value: number | string;
        next: Node | null;

        constructor(value: number | string) {
            this.value = value;
            this.next = null;
        }
        
    }
    
    class Stack {
        top: Node | null;
        botton: Node | null;
        length: number;
    
        constructor() {
            this.top = null;
            this.botton = null;
            this.length = 0;
        }

        peek() {
            return this.top
        }

        push(newValue: number | string) {
            const newNode = new Node(newValue);
            this.length++;
            if(this.length === 1) {
                this.botton = newNode;
                this.top = newNode;
                return this;
            } else {
                
            }

            if(this.top) {
                this.top.next = newNode;
                this.top = newNode
                return this;
            }
        }

        pop() {
            let currentNode = this.botton;

            this.length--;
            if(this.length === 0) {
                this.botton = null;
                this.top = null;
                return;
            }
            for(let i = 0; i < this.length - 1; i++) {
                if(currentNode) currentNode = currentNode.next;                
            }
            console.log(currentNode);
            if(currentNode) {
                currentNode.next = null;
                this.top = currentNode;
            }
            return this;
        }
    }

    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.pop()
    stack.pop()
    stack.pop()
    stack.pop()
    stack.pop()
    
    console.log(stack.top);
})()