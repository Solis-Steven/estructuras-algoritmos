(() => {
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
            this.previous = null;
        }
    }

    class MyDoubleLinkedList {
        constructor(value) {
            this.head = {
                value: value,
                next: null,
                previous: null
            };
            this.tail = this.head;
            this.length = 1;
        }

        append(newValue) {
            const newNode = new Node(newValue);
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;

            return(this);
        }

        preappend(newValue) {
            const newNode = new Node(newValue);
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
            this.length++;

            return(this);
        }

        insert(newValue, index) {
            if(index <= 0) return(this.preappend(newValue));
            if(index >= this.length) return(this.append(newValue));

            this.length++;
            const newNode = new Node(newValue);
            let currentNode = this.head;

            for(let i = 0; i < index; i++) {
                if(i === index - 1) {
                    newNode.next = currentNode.next;
                    newNode.previous = currentNode;
                    currentNode.next.previous = newNode
                    currentNode.next = newNode;
                    return(this);
                }
                currentNode = currentNode.next;
            }
        }

        unShift() {
            const deleteValue = this.head;
            this.length--;

            if(this.length === 0) {
                this.head = null;
                this.tail = null;

                return(deleteValue);
            }

            this.head.next.previous = null;
            this.head = this.head.next;
            deleteValue.next = null

            return(deleteValue);
        }

        pop() {
            const deleteValue = this.tail.next;
            this.length--;

            if(this.length === 0) {
                this.head = null;
                this.tail = null;

                return(deleteValue);
            }

            this.tail.previous.next = null
            this.tail = this.tail.previous

            return(deleteValue);
        }

        delete(index) {
            if(index >= this.length - 1) return(this.pop());
            if(index === 0) return(this.unShift()); 

            let currentNode = this.head;
            for(let i = 0; i < index; i++) {
                if(i === index - 1) {
                    const tempNode = currentNode.next;
                    currentNode.next.next.previous = currentNode;
                    currentNode.next = currentNode.next.next;

                    tempNode.next = null;
                    tempNode.previous = null;
                    return(tempNode);
                }

                currentNode = currentNode.next;
            }

        }

    }

    let doubleLinkedList = new MyDoubleLinkedList("Steven");
    doubleLinkedList.append("Mario");
    doubleLinkedList.append("Marcos");
    // doubleLinkedList.unShift();
    // doubleLinkedList.pop();
    console.log(doubleLinkedList);
})();
