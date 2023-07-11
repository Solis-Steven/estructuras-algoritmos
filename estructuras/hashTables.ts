interface HashTable {
    data: any
}

class HashTable {
    constructor(size: number) {
      this.data = new Array(size);
    }

    hashMethod(key: string) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }

    set(key: string, value: any) {
        // Genereted hash to know memory addres where the value is saved
        const address = this.hashMethod(key);

        if(!this.data[address]) {
            this.data[address] = [];   
        }

        this.data[address].push([key, value]);

        return this.data;
    }

    get(key: string) {
        const addres = this.hashMethod(key);
        const currentBucket = this.data[addres];

        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }

    keys(): string[] {
        const keysArray: string[] = [];

        for(let i = 0; i < this.data.length; i++) {
            // for(let j = 0; j < )
            if(this.data[i]) {
                for(let j = 0; j < this.data[i].length; j++) {
                    keysArray.push(this.data[i][j][0]);
                }
            }
        }

        return keysArray
    }
}

const myHashTable = new HashTable(50);
myHashTable.set("Steven", 19);
myHashTable.set("dddaa", 19);
myHashTable.set("dddaad", 19);
myHashTable.set("Juan", 19);
const prueba = myHashTable.get("Steven")
console.log(prueba);

console.log(myHashTable.keys());