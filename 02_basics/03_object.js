// singleton
//Object.create // constructer method used in singleton

// obj literals //

const mySym = Symbol("Key1")


const JsUser = {
    name: "Shivam",
    "full_name": "Shivam Sharma",
    mySym : "mykey1", // by this it cant use as a symbol
    [mySym] : "mykey1", // use this to presnt as a symbol
    age: 18,
    location: "Delhi",
    email: "Shivamhrsalwan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(JsUser.email) // normally we use this 
// console.log(JsUser["email"]) // this way is use for special case access 
// console.log(JsUser["full_name"]) // 
// console.log(JsUser.mySym); // String
// console.log(typeof JsUser.mySym); // 
// console.log(JsUser[mySym]); //  object use [] to acceess the symbol


JsUser.email = "Shivam@fb.com"; // change of the value
// Object.freeze(JsUser)

JsUser.email = "Shivam@chat.com"; // cant change bcoz of freez
// console.log(JsUser);


//********************************************************  Function   ************************************************* */


JsUser.greeting = function() {
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
