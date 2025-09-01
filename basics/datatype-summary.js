// # Primitive 

// 7 Types : String , Number , Boolean , null(Not zero) , undefined, Symbol, Bigint (Very big sintific value)


// js is a Dynamic Languages dont need to declare the data type at the runtime

// # Reference (Non primitive)

// Arrays , Objects , Functions , 



let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2);  // false

const hero = ["shivam" , "Sharma"] // array

let myobj = {
    name : "Shivam",
    age : 22
} // object key value pair 

const myFunction = function() {
    console.log("Hello world")
}

console.log(typeof myobj)
console.log(typeof sym1);

/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object



*/