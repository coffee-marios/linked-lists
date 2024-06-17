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
    if (this.head === null) return;

    let base = this.head;
    let current = base.nextNode;

    if (current === null) {
      this.head = null;
      return;
    }

    if (current.nextNode === null) {
      base.nextNode = null;
      return;
    }

    while (current.nextNode) {
      base = current;
      current = current.nextNode;

      if (current.nextNode === null) {
        base.nextNode = null;
      }
    }
  }

  toString() {
    let current = this.head;
    let str = "";
    if (current === null) return null;

    if (current.nextNode === null) {
      str = `(${current.value}) -> null`;
      return str;
    }
    while (current.nextNode) {
      str += `(${current.value}) -> `;
      current = current.nextNode;
    }

    str += `(${current.value}) -> null`;

    return str;
  }
  insertAt(value, index) {
    const newNode = new Node(value);
    let ind = 0;
    let base;

    // HEAD IS NULL
    if (this.head === null) {
      if (index === 0) {
        this.head = newNode;
        return;
      }
      if (index > 0) {
        this.head = new Node(undefined);
        base = this.head;
        ind = 1;
      }
      while (index > ind) {
        base.nextNode = new Node(undefined);
        base = base.nextNode;

        ind += 1;
      }
      base.nextNode = newNode;
      return;
    }

    // HEAD IS A NODE
    if (index === 0) {
      let current = this.head;
      newNode.nextNode = current;
      this.head = newNode;
      return;
    }
    base = this.head;
    ind = 1;

    while (index > ind) {
      if (base.nextNode) {
        base = base.nextNode;
      } else if (base.nextNode === null) {
        base.nextNode = new Node(undefined);
        base = base.nextNode;
      }
      ind++;
    }
    if (base.nextNode !== null) {
      let intermezo = base.nextNode;
      base.nextNode = newNode;
      newNode.nextNode = intermezo;
    } else {
      base.nextNode = newNode;
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
