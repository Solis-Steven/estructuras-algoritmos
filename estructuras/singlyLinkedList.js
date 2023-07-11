(()=> {
    

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Solo se puede manejar una linkedlist de string
class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(newValue) {
        const newNode = new Node(newValue);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(newValue) {
        const newNode = new Node(newValue);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(newValue, index) {
        this.length++;

        if(index >= this.length) return this.append(newValue);
        if(index == 0) return this.prepend(newValue);

        const newNode = new Node(newValue);
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



}

let mySinglyLinkedList = new MySinglyLinkedList("Juan");
// mySinglyLinkedList.append("Martha");
// mySinglyLinkedList.append("Pedro");
// mySinglyLinkedList.prepend("Steven");
// mySinglyLinkedList.insert("Andres", 0)
// mySinglyLinkedList.insert("Julia", 1)
// mySinglyLinkedList.insert("Michael", 3)
console.log(mySinglyLinkedList);
}) ()