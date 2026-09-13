
// obj
const user = {
    username: "Shivam",
    price : 999,

    welcomeMessage : function() {
        // console.log(`${this.username}, welcome to the world of JavaScript`);
        // console.log(this);
    }
}


user.welcomeMessage()
// user.username = "Shivam Sharma"
// user.welcomeMessage()

// this is empty object in arrow function
// console.log(this);



// function chai() {
//  console.log(this.username);
//     console.log(this);
// }

// chai();

// const chai = function() {
//     let username = "Shivam";
//     console.log(this.username);
// }

// chai() // undefined 


// arrow function

const chai = () => {
    let username = "Shivam";
    console.log(this.username);
}


chai() // undefined


// syntax of arrow function

const add = (a, b) => {
    return a + b;
}

console.log(add(2, 3)); // 5

