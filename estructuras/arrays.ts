
interface MyArray {
  length: number,
  data: { [key: string]: number }
}

// Solo funciona con un arreglo de numeros
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  
  get(index: number) {
    return this.data[index];
  }

  push(item: number) {
    this.data[this.length] = item;
    this.length++;
    
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(index: number) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }

  shiftIndex(index: number) {
    for(let i = index; i < this.length - 1 ; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(newItem: number) {

    if(this.length === 0) {
      this.data[this.length] = newItem;

      return this.data
    }

    let currentItem: number;
    let nextItem = this.data[0];
    this.data[0] = newItem;

    for(let i = 1; i < this.length + 1; i++) {
      currentItem = this.data[i];
      this.data[i] = nextItem;
      nextItem = currentItem;
    }

    return this.data;
  }

  shift() {

    if(this.length === 0) return this.data;

    const item = this.data[0]
    delete this.data[0]
    this.shiftIndex(0);

    return item;
  }

}


const myArray = new MyArray();
myArray.push(10);
myArray.push(20);
myArray.push(30);
console.log(myArray.data);
// myArray.pop();
// console.log(myArray.data);
// myArray.shift();
// console.log(myArray.data);
// myArray.unshift(40)
// console.log(myArray.data);