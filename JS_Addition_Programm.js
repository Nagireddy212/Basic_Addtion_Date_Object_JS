let a = 10;
let b = 20;
let c = a + b;
console.log("Addition of two Numbers is " +c);

let s1 = "Nagireddy";
let s2 = "Somula";
let s3 = s1 + s2;
console.log("Addition of two Strings is " +s3);

let d = new Date(); // Create a variable it contain current date
let today = "Today is " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
let time = "Time: " + d.getHours() + ":" + (d.getMinutes()); 
console.log(today);