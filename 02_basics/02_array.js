const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["spiderman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros =  marvel_heros.concat(dc_heros)
// console.log(allHeros);


// const all_new_heroes = [...marvel_heros, ...dc_heros]

// console.log(all_new_heroes);


// const another_array = [1,2,3,4 ,[5,6],7,8,[9,[10]]]
// // const real_another_array = another_array.flat(4)  // concetenate all the array also pass a value instid of infinity
// const real_another_array = another_array.flat(Infinity)  // concetenate all the array
// console.log(real_another_array);


console.log(Array.isArray("SHivam"));
console.log(Array.from("Shivam"));
console.log(Array.from({name: "Hitesh"})); // special case


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2 , score3));

