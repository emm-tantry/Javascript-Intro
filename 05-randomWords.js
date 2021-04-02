console.log("05-randomWords");

//article variables
let string1 = ["A", "The"];
let article = string1[Math.floor (Math.random() * string1.length)];

//noun variables
let string2 = ["cat", "dog", "rabbit"];
let noun = string2[Math.floor (Math.random() * string2.length)];

//verb variables
let string3 = ["ran", "hopped", "scurried"];
let verb = string3[Math.floor (Math.random() * string3.length)];

console.log(article,noun,verb,"away.");
