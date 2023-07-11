(() => {

    const rolPriority = {
        "CEO": 7,
        "CFO": 5,
        "COO": 9,
        "CMO": 1,
        "CTO": 3,
        "DRH": 11,
        "NS": 2
    }

    class Employee {
        constructor(name, age, rol) {
            this.name = name;
            this.age = age;
            this.rol = rol;
            this.left = null;
            this.right = null;
        }
    }

    class HierarchicalStructure {
        constructor() {
            this.root = null;
            this.left = null;
            this.right = null;
        }

        insertNode(node, newNode) {
            if(rolPriority[newNode.rol] <= rolPriority[node.rol]) {
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

        appendChild(name, age, rol) {
            const newEmployee = new Employee(name, age, rol);

            if(this.root === null) {
                this.root = newEmployee;

                return(this);
            }

            return(this.insertNode(this.root, newEmployee));
        }

        searchByName(node, name, nodesArray) {
            if(node === null) return;

            if (node.name === name) return nodesArray;
            nodesArray.push(node.age);
            let leftResults = this.searchByName(node.left, name, nodesArray)
            if(leftResults) return(leftResults);
            
            let rightResults = this.searchByName(node.right, name, nodesArray)
            if(rightResults) return(rightResults);

            
            return(null)
        }

        search(name1, name2) {
            const firstPath = this.searchByName(this.root, name1, [])
            const secondPath = this.searchByName(this.root, name2, [])
            let commonChief;

            console.log(firstPath);
            console.log(secondPath);

            // console.log(secondPath[6]);
            // for(let i = 0; i < Math.max(firstPath.length, secondPath.length) - 2; i++) {
                
            //     if(firstPath[i].name !== secondPath[i].name) {
            //         if(firstPath.length < secondPath) {
            //             commonChief = secondPath[i + 1]
            //         } else {

            //             commonChief = firstPath[i + 1]
            //         }
            //         break;
            //     }
            // }

            return(commonChief);
        }
    }

    let structure = new HierarchicalStructure();
    structure.appendChild("Steven", 19, "CEO");
    structure.appendChild("Marcos", 23, "CFO");
    structure.appendChild("Tina", 25, "COO");
    structure.appendChild("Sofia", 43, "NS");
    structure.appendChild("Julia", 18, "CMO");
    structure.appendChild("Melvin", 20, "CTO");
    structure.appendChild("Martha", 21, "DRH");
    
    console.log(structure.search("Julia", "Melvin"));
    // console.log(structure);
    // console.log(structure);

})()