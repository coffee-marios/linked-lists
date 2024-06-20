import { Linked } from "./linked_list.js";

console.clear();
const first = new Linked();

// Testing append(), size(), toString()

first.append("start");
first.append("1");
first.append("2");
first.append("3");
first.append("4");
first.append("5");
first.append("6");

console.log("size, append");
console.log("\nSize", first.size());
console.log("To string: ", first.toString());

/* We expect: 
Size: 7
(start) -> (1) -> (2) -> (3) -> (4) -> (5) -> (6) -> (null)
*/

// Testing pop()

first.pop();
first.pop();
first.pop();

console.log("\n\npop");
console.log("\nSize", first.size());
console.log("To string: ", first.toString());

/* We expect: 
Size: 4
(start) -> (1) -> (2) -> (3) -> (null)
*/

// Testing insertAt()

first.insertAt("INSERT", 2);
first.insertAt("INSERT", 0);

console.log("\n\ninsertAt");
console.log("\nSize", first.size());
console.log("To string: ", first.toString());

/* We expect: 
Size: 6
(INSERT) -> (start) -> (1) -> (INSERT) -> (2)  -> (3) -> (null)
*/

// Testing removeAt()

first.removeAt(0);
first.removeAt(2);

console.log("\n\nremoveAt");
console.log("\nSize", first.size());
console.log("To string: ", first.toString());

/* We expect: 
Size: 4
(start) -> (1) -> (2) -> (3) -> (null)
*/

// Testing prepend() and append()

first.prepend("PREPEND");
first.prepend("PREPEND");

first.append("APPEND");
first.append("APPEND");

console.log("\n\nprepend, append");
console.log("\nSize", first.size());
console.log("To string: ", first.toString());

/* We expect: 
Size: 8
(PREPEND) -> (PREPEND) -> (start) -> (1) -> (2) -> (3) -> (APPEND) -> (APPEND) -> (null) 
*/

// Testing _head(), tail(), at()
console.log("\n\n_head, tail, at");
console.log("\nHead:", first._head());
console.log("\nTail:", first.tail());
console.log('\nThe node at "2" is:', first.at(2));
console.log('\nThe node at "5" is:', first.at(5));

/* We expect: 
Head: Node{value: PREPEND, nextNode: PREPEND}
Tail: Node{value: APPEND, nextNode: null}
The node at "2" is: Node{value: 'start', nextNode:...}
The node at "5" is: Node{value: 3, nextNode:...}

*/

// Testing contains()
console.log("\n\ncontains");
console.log('\nThe value "start" exists in the list:', first.contains("start"));
console.log(
  'The value "missing" exists in the list:',
  first.contains("missing")
);

/* We expect: 
The value "start" exists in the list: true'
The value "missing" exists in the list: true'
*/

// Testing find()
console.log("\n\nfind");

console.log("\nTo string: ", first.toString());

console.log('\nThe index of "000" is:', first.find("000"));
console.log('The index of "start" is:', first.find("start"));
console.log('The index of "3" is:', first.find("3"));

/* We expect:
The index of "000" is: null
The index of "start" is: 2
The index of "3" is: 5

*/
