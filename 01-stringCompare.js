let string = ["meow", "woof", "purr", "bark"];
let cat = string[Math.floor (Math.random() * string.length)];

//let cat = "meow" //alert received = "Meow!"
//let cat = "woof" //alert received = ":( no cat"
//let cat = "purr" //alert received = "Meow!"
//let cat = "bark" //alert received = ":( no cat"

if (cat == "meow" || cat == "purr") {
  alert("Meow!");
}
else {
  alert(":( no cat");
}

console.log("01-stringCompare");
console.log("cat: " + cat);
