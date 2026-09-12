// array

const myArr = [0, 2, 4, 6, 8, 9]
const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2);

// Array methods

// console.log(myArr.push(6));
// console.log(myArr.push(7));
// console.log(myArr.pop());
// console.log(myArr);


// myArr.unshift(10)
// myArr.shift() // no need of argumwent in the shift operation

// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // it covert the arr into string



// slice, splice
//const myArr = [0, 2, 4, 6, 8, 9]

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(0, 3)
console.log("C ", myArr);
console.log(myn2);


