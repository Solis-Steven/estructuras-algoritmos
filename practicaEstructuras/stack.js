(() => {
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null
        }
    }

    class Stack {
        constructor() {
            this.top = null;
            this.botton = null;
            this.length = 0;
        }

        peek() {
            return(this.top);
        }

        push(newValue) {
            const newNode = new Node(newValue);
            this.length++;

            if(this.length === 1) {
                this.top = newNode;
                this.botton = newNode;
                
                return;
            }

            this.top.next = newNode;
            this.top = newNode;
        }

        pop() {
            let currenNode = this.botton;

            this.length--;
            if(this.length === 0) {
                this.botton = null;
                this.top = null;
                return;
            }

            for(let i = 0; i < this.length; i++) {
                if(i === this.length - 1) {
                    const deletedValue = currenNode.next;
                    currenNode.next = null;
                    this.top = currenNode;
                    return(deletedValue);
                }
                currenNode = currenNode.next;
            }
        }
    }

    let myStack = new Stack();
    myStack.push(1)
    myStack.push(2)
    myStack.push(3)
    myStack.pop()
    console.log(myStack)
})()