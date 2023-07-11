(() => {
    const SinglyLinkedListNode = class {
        constructor(nodeData) {
            this.data = nodeData;
            this.next = null;
        }
    };
    
    const SinglyLinkedList = class {
        constructor() {
            this.head = null;
            this.tail = null;
        }
    
        insertNode(nodeData) {
            const node = new SinglyLinkedListNode(nodeData);
    
            if (this.head == null) {
                this.head = node;
            } else {
                this.tail.next = node;
            }
    
            this.tail = node;
        }
    };
    
    function printSinglyLinkedList(node, sep, ws) {
        while (node != null) {
            ws.write(String(node.data));
    
            node = node.next;
    
            if (node != null) {
                ws.write(sep);
            }
        }
    }

    function hasCycle(head) {
        let tortule = head;
        let hare = head;

        while(tortule !== null && hare !== null && hare.next !== null) {
            tortule = tortule.next;
            hare = hare.next.next;

            if(tortule === hare) {
                return(1)
            }

        }

        return(0);
    }

    let linkedList = new SinglyLinkedList();
    linkedList.insertNode(1)
    // linkedList.insertNode(2)
    // linkedList.insertNode(3)
    linkedList.tail.next = linkedList.head
    console.log(hasCycle(linkedList.head));
    // console.log(linkedList);
})()