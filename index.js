class Linked {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return this.head;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
      return current;
    }
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
console.log(first.append("34"));
console.log(first.append("334"));
console.log(first.append("6"));

// first.append("334");
//first.append("22");
//console.log(first.head.value);

//console.log(first.nextNode);
