let letters = [];
let word = 'racecar';
let rword = '';

// put letter of word in a stack
for (let i = 0; i < word.length; i++) {
	letters.push(word[i]);
}
// pop off the stack in a reverse order
for (let i = 0; i < word.length; i++) {
	rword += letters.pop()
}
if (rword === word) {
	console.log(word + " is a Palindrome");
}
else {
	console.log(word + " ain't a Palindrome");
}


// Create Stack
let Stack = function () {
	this.count = 0;
	this.storage = {};

	// Adds a value onto the end of the stack
	this.push = function (value) {
		this.storage[this.count] = value;
		this.count++;
	}
	// Removes and returns the value at the end of the stack
	this.pop = function () {
		if (this.count === 0) {
			return undefined;
		}
		else {
			this.count--;
			let result = this.storage[this.count];
			delete this.storage[this.count];
			return result;
		}
	}
	this.size = function () {
		return this.count
	}
	// Return the values at the end of the stack
	this.peek = function () {
		return this.storage[this.count - 1]
	}
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())