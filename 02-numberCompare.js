let num = Math.floor(Math.random()*(200)-50);
// let num = -1; //alert received = "tested negative"
// let num = 1; //alert received = "hello"
// let num = 50; //alert received = "leftover numbers ;-;"

if (num <= 0) {
  alert("tested negative");
}
else if (num > 0 && num < 20) {
  alert("hello")
}
else {
  alert("leftovers numbers ;-;")
}

console.log("02-numberCompare");
console.log("num: " + num);
