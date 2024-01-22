/* HASH TABLES IN DSA */
const hash = (string, max) => {
	const hash = 0;
	for(let i = 0; i < string.lenth; i++){
		hash += string.charCodeAt(i);
	}
	return hash % max;
}

let hashTable = function(){
	let storage = [];
	const storageLimit = 4;
	this.print = function(){
		console.log(storage);
	}
	this.add = function(key, value){
		const index = hash(ey, storageLimit);
		if(storage[index] === undefined){
			storage[index] = [
				[key, value]
			]
		}
		else{
			const inserted = false;
		}
	}
}