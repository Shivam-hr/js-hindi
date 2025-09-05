// dates

let myData = new Date()

// console.log(myData); //2025-09-03T18:17:36.411Z
// console.log(myData.toString()); // Real time GMT 0000
// console.log(myData.toISOString()); 
// console.log(myData.toJSON()); 
// console.log(myData.toDateString());  //Wed Sep 03 2025 
// console.log(myData.toLocaleString());   // 9/3/2025, 6:21:03 PM


// console.log(typeof myData);


  
// let myCreatedDate = new Date(2023, 0 ,23)  // Month start from zero
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("01-14-2023") // in double digit months start from 1
// //console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));
// console.log(Temporal.Now.instant());


let newDate = Date.now()

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());


//`${newDate.getDay()} and the time is ...`

newDate.toLocaleString('default', {
    weekday: "long"
})// to coustamize local string format 