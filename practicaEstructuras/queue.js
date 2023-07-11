(() => {
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class Queue {
        constructor() {
            this.first = null;
            this.last = null;
            this.length = 0;
        }

        enqueue(newValue) {
            const newNode = new Node(newValue);
            this.length++;

            if(this.length === 1) {
                this.first = newNode;
                this.last = newNode;
                
                return(this);
            }

            newNode.next = this.last;
            this.last = newNode;

            return(this);
        }

        dequeue() {
            const deleteValue = this.first;
            this.length--;

            if(this.length === 0) {
                this.first = null;
                this.last = null;

                return(deleteValue);
            }

            let currentValue = this.last;
            for(let i = 0; i < this.length; i++) {
                if(i === this.length - 1) {
                    currentValue.next = null;
                    this.first = currentValue;

                    return(deleteValue);
                }
                currentValue = currentValue.next;
            }
        }


        front() {
            return(this.first);
        }

        isEmpty() {
            if(this.length === 0) {
                return(true);
            }

            return(false);
        }

        size() {
            return(this.length);
        }
    }

    let queue = new Queue();
    queue.enqueue("Steven");
    queue.enqueue("Marcos");
    queue.enqueue("Juan");
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    console.log(queue.length);
    
    console.log(queue);
})()