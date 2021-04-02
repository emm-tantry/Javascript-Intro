function rainbow(color){
  if (color == "red"){
    return "Red <3";
  }
  else if (color == "orange"){
    return "Orange :O";
  }
  else if (color == "yellow"){
    return "Yellow :)";
  }
  else if (color == "green"){
    return "Green :3";
  }
  else if (color == "blue"){
    return "Blue o.0";
  }
  else {
      return "Purple ;P";
  }
}

console.log("04-functionConditions");

console.log("It's " + rainbow("red"));
console.log("It's " + rainbow("orange"));
console.log("It's " + rainbow("yellow"));
console.log("It's " + rainbow("green"));
console.log("It's " + rainbow("blue"));
console.log("It's " + rainbow("purple"));
