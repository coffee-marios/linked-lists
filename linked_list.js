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

  pop() {
    let siz = this.size();
    if (siz < 0) throw new Error();

    if (this.head === null) throw new Error();

    let base = this.head;
    let current = base.nextNode;

    if (base.nextNode === null) {
      this.head = null;

      return;
    }

    while (current.nextNode) {
      current = current.nextNode;
      base = base.nextNode;

      if (current.nextNode === null) {
        console.log(true, "c", current, "b", base);
        base.nextNode = null;
      } else {
        console.log(false, "current", current, "base", base);
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export { Linked };
