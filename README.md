# Data Structures and Algorithms in JavaScript

Welcome to the Data Structures and Algorithms repository in JavaScript! This collection provides efficient JavaScript implementations of various data structures and fundamental algorithms.

## Overview

This repository contains JavaScript implementations of essential data structures and classic algorithms commonly used in computer science and software development.

## Implemented Data Structures

### Stack

The `Stack` class offers a simple implementation of a stack data structure. It follows the Last-In-First-Out (LIFO) principle.

#### Methods

- `push(item)`: Adds an item to the top of the stack.
- `pop()`: Removes and returns the item at the top of the stack.
- `peek()`: Returns the item at the top of the stack without removing it.
- `isEmpty()`: Checks if the stack is empty.
- `size()`: Returns the number of elements in the stack.

#### Usage

```javascript
// Example usage of Stack class
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
console.log(stack.peek()); // Outputs: 15
stack.pop();
console.log(stack.peek()); // Outputs: 10


### Sets
The `Set` class represents a collection of unique elements. It supports common set operations like intersection, union, difference, etc.

#### Methods
- `add(element)`: Adds a new element to the set.
- `delete(element)`: Removes an element from the set.
- `has(element)`: Checks if the set contains a specific element.
- `clear()`: Removes all elements from the set.
- `size()`: Returns the number of elements in the set.
- `values()`: Returns an array of all elements in the set.

#### Usage
```javascript
// Example usage of Set class
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
console.log(setA.values()); // Outputs: [1, 2, 3]

const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
console.log(setB.values()); // Outputs: [3, 4, 5]

const unionSet = setA.union(setB);
console.log(unionSet.values()); // Outputs: [1, 2, 3, 4, 5]
### Queues
The `Queue` class provides a basic implementation of a queue data structure. It follows the First-In-First-Out (FIFO) principle.

#### Methods
- `enqueue(element)`: Adds an element to the queue.
- `dequeue()`: Removes and returns the element at the front of the queue.
- `peek()`: Returns the element at the front of the queue without removing it.
- `isEmpty()`: Checks if the queue is empty.
- `size()`: Returns the number of elements in the queue.

#### Usage
```javascript
// Example usage of Queue class
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
console.log(queue.peek()); // Outputs: 5
queue.dequeue();
console.log(queue.peek()); // Outputs: 10


#### Binary Search
The `binarySearch` function implements the binary search algorithm. It efficiently searches for an element in a sorted array by repeatedly dividing the search interval in half.


#### Usage
// Example usage of binarySearch function
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16];
const targetElement = 10;
const resultIndex = binarySearch(sortedArray, targetElement);
if (resultIndex !== -1) {
  console.log(`Element ${targetElement} found at index ${resultIndex}`);
} else {
  console.log(`Element ${targetElement} not found in the array`);
}
