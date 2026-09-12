const name = "Shivam"
const Surname = " Sharma"
const age = 25

console.log(name + Surname ); // dont use this

console.log(`Hello My name is ${name} and Family name is ${Surname} and age is ${age} `); // thisone is better

const gameName = new String('Shivams') // same as string declaration also acess the key 


console.log(gameName[0])

console.log(gameName.length);
console.log(gameName.toUpperCase()); // dont change the orignal value just change the  copy value

console.log(gameName.charAt('3'));

// learn string methods  


const newString = "    Shivam    "
console.log(newString);
console.log(newString.trim());  

// also go for the documenation


const url = "http://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20', '-')) // %20 is consider as a space in the link


console.log(url.split('-')) 

 