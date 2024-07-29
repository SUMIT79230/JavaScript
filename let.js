// Concept - 1

// 1. Variables declared with let have Block Scope
// 2. Variables declared with let cannot be Redeclared in the same scope

{
    let x = 2;
    console.log(x);
}
// console.log(x);
// x can NOT be used here
// the var always have Global Scope : accessed from outside the block
{
    var x = 3;
    console.log(x);
}
console.log(x);


// Concept - 2 
// Let keyword cann't be redeclared but Var can be redeclared.
{
    let x = "sumit kumar";
    console.log(x);
    // let x = 0; // cannot be redeclare
    // console.log(x);
}
{
    var x = "Sumit kumar";
    console.log(x);
    var x = 0;
    console.log(x);
}
var x = 5;
console.log(x);


// Note - 
// let and const have block scope.
// let and const can not be redeclared in same scope.
// let and const must be declared before use.
// let and const does not bind to this.
// let and const are not hoisted.


// var support hoisting means  ->  you can use variable before declared it
carName = "Volvo";
var carName;

// Important Example
var x = 2;   // Allowed
let x = 3;   // Not allowed
{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}
{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}


