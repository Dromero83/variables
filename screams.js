//global variables, string variables
var pizza = "I'm at the pizza hut,";
var taco = "I'm at the taco bell,";
var comb = "I'm at the combination pizza hut and taco bell";
console.log(pizza, taco, comb);

//object
const laptop = {"type":"windows 10", "color":"red"};
document.getElementById("lap").innerHTML = "My " + laptop.type + " laptop is " + laptop.color;

{ //block variable
let x = 10;
let y = 5;
a = x + y;
b = x - y;
c = x * y;
d = x / y;

document.getElementById("if").innerHTML = "If x = " + x + " and y = " + y + ", then the following must be true:";
document.getElementById("add").innerHTML = "x + y = " + x + " + " + y + " = " + a;
document.getElementById("sub").innerHTML = "x - y = " + x + " - " + y + " = " + b;
document.getElementById("multi").innerHTML = "x * y = " + x + " * " + y + " = " + c;
document.getElementById("divide").innerHTML = "x / y = " + x + " / " + y + " = " + d;
}