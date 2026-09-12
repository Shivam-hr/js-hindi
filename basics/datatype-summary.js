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
1) Primitive Datatypes (These are basic, fundamental data types directly 
                        supported by the programming language. They represent single, simple values)
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes  (These are more complex data types that can hold collections of data or 
                            represent objects. They are often built upon primitive data types.)
       Arrays  =>  object
       Function  =>  function
       Object  =>  object



*/



//************************************  Stack and Heap Memory ************************************//

// Stack (Primitive) , Heap (Non-Primitive)


// Stack dont changed just copy 

let age = 25

let anotherage = age

anotherage = 23

console.log(age); 
console.log(anotherage);



// heap  (call by reference change value in the orignal one)

let userone = {
    email: "user@google.com",
    upi : "user@ybl"
}

let usertwo = userone

usertwo.email = "SHivamhr"

console.log(userone);
console.log(usertwo);  // 
