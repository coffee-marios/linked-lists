import { Linked } from "./linked_list.js";

console.clear();
const first = new Linked();

first.append("start");
first.append("2");
first.append("3");
first.insertAt("INSERT", 3);
first.append("4");
// first.append("5");
// first.append("6");
// first.pop();
// first.pop();
// first.pop();
// first.pop();
console.log("size", first.size());
console.log("str", first.toString());
//console.log('The node at "2" is', first.at(2));

// first.append("2");
// first.append("3");
// console.log("size", first.size());

// first.prepend("000");
// first.append("4");

console.log("head", first.head);
// console.log("tail", first.tail());
// console.log("size", first.size());
// console.log('The node at "10" is', first.at(10));

// console.log('The node at "0" is', first.at(0));
// console.log('The node at "1" is', first.at(1));
// console.log('The node at "2" is', first.at(2));
// console.log('The node at "3" is', first.at(3));
// console.log('The node at "4" is', first.at(4));
// console.log('The node at "5" is', first.at(5));

// console.log('The index of "000" is', first.find("000"));
// console.log('The index of "1" is', first.find("1"));
// console.log('The index of "3" is', first.find("3"));
// console.log('The index of "4" is', first.find("4"));
// console.log('The index of "ab" is', first.find("ab"));

// console.log('The value "000" exists in the list:', first.contains("000"));
// console.log('The value "3" exists in the list:', first.contains("3"));

// console.log('The value "4" exists in the list:', first.contains("4"));
// console.log('The value "no" exists in the list:', first.contains("no"));

// console.log("\n");
// console.warn("\n We are going to use pop\n");
// first.pop();
// console.log("size", first.size());

// console.log('The node at "0" is', first.at(0));
// console.log('The node at "1" is', first.at(1));
// console.log('The node at "2" is', first.at(2));

// console.log('The node at "4" is', first.at(4));
// console.log('The node at "5" is', first.at(5));

// console.log("\n\nmore pop\n");
// first.pop();
// // first.pop();
// // first.pop();
// // first.pop();
// // first.pop();
// // first.pop();

// console.log("size", first.size());

// console.log('The node at "0" is', first.at(0));
// console.log('The node at "1" is', first.at(1));
// console.log('The node at "2" is', first.at(2));

// console.log('The node at "4" is', first.at(4));
// console.log('The node at "5" is', first.at(5));
