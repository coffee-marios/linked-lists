# linked-lists

A linked list is a linear sequence of nodes that contain two fields: data (value) and a link to the next node. The last node instead of linking to the next point is set to null.

#

### Classes

In this project we use two classes:

Linked: represents the full list

Node: contains a value property and a link to the nextNode, set both as null by default

#

### Methods

append(value): adds a new node containing value to the end of the list

prepend(value): adds a new node containing value to the start of the list

size: returns the total number of nodes in the list

\_head: returns the first node in the list

tail: returns the last node in the list

at(index): returns the node at the given index

pop: removes the last element from the list

contains(value): returns true if the passed in value is in the list and otherwise returns false

find(value): returns the index of the node containing value, or null if not found

toString: represents your linked list objects as strings, so you can print them out and preview them in the console

insertAt(value, index): inserts a new node with the provided value at the given index

removeAt(index): that removes the node at the given index
