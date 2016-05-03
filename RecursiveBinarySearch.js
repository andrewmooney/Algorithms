"use strict"

const randArray = (size, min, max) => {
		return Array.apply(null, Array(1000)).map(() => Math.floor(Math.random() * (max - min + 1)))
}

const binSearch = (num, arr) => {
	let found = false
	const half = Math.floor((arr.length / 2))
	if (arr.length > 1) {
		if (arr[half] === num) {
			found = true
		} else if (num < arr[half]) {
			arr = arr.slice(0, half)
			return binSearch(num, arr)
		} else if (num > arr[half]) {
			arr = arr.slice(half, arr.length)
			return binSearch(num, arr)
		}
	}
	console.log(arr);
	return found
}

const arr = randArray(100, 0, 200).sort((a,b) => a-b)
let found = binSearch(199, arr)
console.log(found);
