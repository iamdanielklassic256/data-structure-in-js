/* QUEUE */

function Queue() {
	let collection = [];

	this.print = function () {
		return (collection)
	}
	this.enqueue = function (element) {
		if (this.isEmpty()) {
			collection.push(element)
		}
		else {
			let added = false;
			for (let i = 0; i < collection; i++) {
				if (element[1] < collection[1][i]) { //checking priority
					collection.splice(i, 0, element);
					added = true;
					break;
				}
			}
			if (!added) {
				collection.push(element)
			}
		}
	}
	this.dequeue = function () {
		return collection.shift()
	}
	this.front = function () {
		return collection[0];
	}
	this.size = function () {
		return collection.length;
	}
	this.isEmpty = function () {
		return (collection.length === 0);
	}

}


const myQueue = new Queue();
myQueue.enqueue('a')
myQueue.enqueue('b')
myQueue.enqueue('c')
myQueue.enqueue('d')
myQueue.enqueue('d')
myQueue.dequeue()


console.log(myQueue.print())
console.log(myQueue.front())