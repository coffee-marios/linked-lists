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
      // newNode.nextNode = this.head;
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

  contains(value) {
    let current = this.head;
    if (current.value === value) return true;
    while (current.nextNode) {
      if (current.nextNode.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    if (current === null) return null;
    if (current.value === value) return 0;

    while (current.nextNode !== null) {
      index += 1;
      if (current.nextNode.value === value) return index;
      current = current.nextNode;
    }
    return null;
  }

  at(index) {
    let _index = 0;

    let current = this.head;
    if (current === null) return null;
    while (current.nextNode && index > _index) {
      current = current.nextNode;
      _index += 1;
    }

    return index > _index ? null : current;
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
console.log('The node of "10" is', first.at(10));

console.log('The node of "0" is', first.at(0));
console.log('The node of "1" is', first.at(1));
console.log('The node of "2" is', first.at(2));
console.log('The node of "3" is', first.at(3));
console.log('The node of "4" is', first.at(4));
console.log('The node of "5" is', first.at(5));

console.log('The index of "000" is', first.find("000"));
console.log('The index of "1" is', first.find("1"));
console.log('The index of "3" is', first.find("3"));
console.log('The index of "4" is', first.find("4"));
console.log('The index of "ab" is', first.find("ab"));

console.log('The value "000" exists in the list:', first.contains("000"));
console.log('The value "3" exists in the list:', first.contains("3"));

console.log('The value "4" exists in the list:', first.contains("4"));
console.log('The value "no" exists in the list:', first.contains("no"));

// first.append("334");
//first.append("22");
//console.log(first.head.value);

//console.log(first.nextNode);
