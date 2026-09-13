
// obj
const user = {
    username: "Shivam",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to the world of JavaScript`);
    }
}

function chai() {
    let username = "Shivam Sharma";
    console.log(this.username);
}

// user.welcomeMessage()
// user.username = "Shivam Sharma"
// user.welcomeMessage()