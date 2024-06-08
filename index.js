class Linked {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      newNode.nextNode = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      newNode.nextNode = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      newNode.nextNode = current;
      this.head = newNode;
    }
    return this.head;
  }

  head1() {
    return this.head;
  }
  tail() {
    let current = this.head;
    if (current.nextNode === null) return current;

    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  size() {
    let current = this.head;
    if (current === null) return 0;
    let listLength = 1;
    while (current.nextNode !== null) {
      current = current.nextNode;
      listLength += 1;
    }
    return listLength;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
console.clear();
const first = new Linked();
console.log("size", first.size());

first.append("1");
first.append("2");
first.append("3");
console.log("size", first.size());

first.prepend("000");
first.append("4");

console.log("head", first.head1());
console.log("tail", first.tail());
console.log("size", first.size());

// first.append("334");
//first.append("22");
//console.log(first.head.value);

//console.log(first.nextNode);
