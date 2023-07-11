(() => {

    class Array {
        constructor() {
            this.length = 0;
            this.data = {}
        }

        push(item) {
            this.data[this.length] = item;
            this.length++;

            return(this.data);
        }

        unshift(newItem) {
            if(this.length === 0) {
                this.data[0] = newItem;

                return(this.data);
            }

            let currentItem;
            let nextItem = this.data[0];
            this.data[0] = newItem;

            for(let i = 1; i < this.length + 1; i++) {
                currentItem = this.data[i];
                this.data[i] = nextItem;
                nextItem = currentItem;
            }

            return(this.data);
        }

        get(index) {
            return(this.data[index]);
        }

        pop() {
            if(this.length === 0) return(this.data)

            const deleteValue = this.data[this.length - 1];
            delete this.data[this.length - 1];
            this.length--;

            return(deleteValue);
        }

        shiftIndex(index) {
            for(let i = index; i < this.length - 1 ; i++) {
              this.data[i] = this.data[i + 1];
            }
            delete this.data[this.length - 1];
            this.length--;
          }

        shift() {

            if(this.length === 0) return this.data;
        
            const item = this.data[0]
            delete this.data[0]
            this.shiftIndex(0);
        
            return item;
          }
    }

    let array = new Array();
    array.push(1);
    array.push("Steven");
    array.push(false);
    const person = {
        name: "Martha",
        age: 30
    }
    array.push(person);

    console.log(array);
    console.log(array.shift());
    console.log(array.shift());
    console.log(array);
})()