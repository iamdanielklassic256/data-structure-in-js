function mySets() {
	//variable collection will hold the set
	let collection = [];
	//this method will check for the presence of variable whether true or false
	this.has = function (element) {
		return (collection.indexOf(element) !== -1) //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
	}
	//this method will return all the values in the set
	this.value = function () {
		return collection;
	}
	//thid method will add a element to the set
	this.add = function (element) {
		if (!this.has(element)) {
			collection.push(element)
			return true
		}
		else{
			console.log('Element Already exist 😒')
		}
	}
	// this method will remove an element from the set
	this.remove = function (element) {
		if (this.has(element)) {
			index = collection.indexOf(element);
			collection.splice(index, 1)
			return true;
		}
		else {
			return false;
		}
	}
	// this method will return the size of the set
	this.size = function () {
		return collection.length;
	}
	// this method will return the union of two sets
	this.union = function (otherSet) {
		let unionSet = new mySets();
		let firstSet = this.value();
		let secondSet = otherSet.value();

		firstSet.forEach(function (e) {
			unionSet.add(e);
		});

		secondSet.forEach(function (e) {
			unionSet.add(e);
		});

	}
	// this method will return the intersection of two sets as a new set
	this.intersection = function (otherSet) {
		let intersetedSet = new mySets();
		let firstSet = this.value()
		firstSet.forEach(function (e) {
			if (otherSet.has(e)) {
				intersetedSet.add(e);
			}
		});
		return intersetedSet;
	}
	// this method will return the difference of two sets as a new set 
	this.difference = function (otherSet) {
		let differentSet = new mySets();
		let firstSet = this.value();
		firstSet.forEach(function (e) {
			if (!otherSet.has(e)) {
				differentSet.add(e);
			}
		});
		return differentSet;
	}
	// this method will test out if the set is a subset of a different set
	this.subset = function (otherSet) {
		let firstSet = this.value();
		return firstSet.every(function (e) {
			return otherSet.has(e)
		})
	}
}
let SetA = new mySets();
let SetB = new mySets();
SetA.add("a");
SetB.add("b");
SetB.add("c");
SetB.add("a");
SetB.add("d");


console.log(SetA.subset(SetB))
console.log(SetB.union(SetA));

console.log(SetA.has(3))
console.log(SetA.has("a"))
console.log(SetB.value())
console.log(SetA.add("a"));