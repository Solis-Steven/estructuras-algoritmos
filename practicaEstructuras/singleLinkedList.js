(() => {

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class MyLinkedList {
        constructor(value) {
            this.head = {
                value: value,
                next: null
            }

            this.tail = this.head;
            this.length = 1;
        }

        // This method inserted at the end of the linked list
        append(newValue) {
            const newNode = new Node(newValue);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;

            return this;
        }

        // This method inserted at the star of the linked list
        preappend(newValue) {
            const newNode = new Node(newValue);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;

            return this;
        }

        // This method inseted between two elements at the linked list
        insert(newValue, index) {
            const newNode = new Node(newValue);
            this.length++;

            if(index >= this.length) return this.append(newNode);
            if(index <= 0) return this.preappend(newNode)

            let currenNode = this.head;

            for(let i = 0; i < index; i++) {
                if(i === index - 1) {
                    newNode.next = currenNode.next;
                    currenNode.next = newNode;
                    return this;
                }

                currenNode = currenNode.next;
            }

            
        }

        // This method delete at the start of the linked list
        shift() {
            const deletedValue = this.head;
            this.length--;
            if(this.length === 0) {
                this.head = null;
                this.tail = null;
                return(deletedValue);   
            }
            this.head = this.head.next;
            return(deletedValue);
        }

        // This method delete at the of the linked list
        pop() {
            let currentValue = this.head;
            this.length--;

            if(this.length === 0) {
                const deletedValue = this.head;
                this.head = null;
                this.tail = null;
                return(deletedValue);
            }
            
            for(let i = 0; i < this.length; i++) {
                if(i === this.length - 1) {
                    const deletedValue = currentValue.next;
                    currentValue.next = null;
                    this.tail = currentValue;
                    return(deletedValue);
                }
                currentValue = currentValue.next;
            }
        }

        // This method delete between two elements at the linked list
        delete(index) {
            
            if(index === 0) return(this.shift());
            else if(index + 1 >= this.length) return(this.pop());

            this.length--;
            let currenNode = this.head;
            for(let i = 0; i < index; i++) {
                if(i === index - 1) {
                    const deletedValue = currenNode.next;
                    currenNode.next = currenNode.next.next;
                    currenNode.next.next = null
                    return(deletedValue);
                }

                currenNode = currenNode.next;
            }
        }
    }

    let linkedlist = new MyLinkedList("Steven");
    linkedlist.append("Mario");
    linkedlist.append("Pedro");
    linkedlist.delete(1)
    console.log(linkedlist);

})()