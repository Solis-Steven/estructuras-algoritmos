(() => {

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.left = null;
            this.right = null;
        }
    }

    class BinaryTree {
        constructor() {
            this.root = null;
            this.left = null;
            this.right = null;
        }

        insertNode(node, newNode) {
            if(newNode.age <= node.age) {
                if(node.left === null) {
                    node.left = newNode;
                    
                    return;
                }

                this.insertNode(node.left, newNode);
            } else {
                if(node.right === null) {
                    node.right = newNode;

                    return;
                }

                this.insertNode(node.right, newNode);
            }
        }

        appendChild(name, age) {
            const newPerson = new Person(name, age);
            
            if(this.root === null) {
                this.root = newPerson;
                
                return(this);
            }

            this.insertNode(this.root, newPerson);

            return(this);
        }

        inOrder(node, ageArray) {
            if(node === null) return;

            this.inOrder(node.left, ageArray);
            ageArray.push(node.age);
            this.inOrder(node.right, ageArray);

            return(ageArray);
        }

        preOrder(node, ageArray) {
            if(node === null) return;

            ageArray.push(node.age);
            this.preOrder(node.left, ageArray);
            this.preOrder(node.right, ageArray);

            return(ageArray);
        }

        postOrder(node, ageArray) {
            if(node === null) return;

            this.postOrder(node.left, ageArray);
            this.postOrder(node.right, ageArray);
            ageArray.push(node.age)

            return(ageArray);
        }
        
        recorridoAnchura() {
            if(this.root === null) return;

            const queue = [this.root];
            while(queue.length > 0) {
                const node = queue.shift();
                console.log(node.name);
                if(node.left !== null) {
                    queue.push(node.left);
                }
                if(node.right !== null) {
                    queue.push(node.right);
                }
            }
        }
    }

    let tree = new BinaryTree();
    tree.appendChild("Steven", 19);
    tree.appendChild("Juan", 45);
    tree.appendChild("Marcos", 13);
    tree.appendChild("Sandra", 15);
    tree.appendChild("Diego", 27);
    tree.appendChild("Jaime", 42);

    // console.log(tree.inOrder(tree.root, []));
    // console.log(tree.preOrder(tree.root, []));
    // console.log(tree.postOrder(tree.root, []));
    console.log(tree.recorridoAnchura());

    // console.log(tree);
})()