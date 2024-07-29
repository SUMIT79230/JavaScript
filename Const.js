// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

// 1. Cannot be Reassigned
const x = 3;
//x = 4; // give error -> cann't redeclare
console.log(x);


// 2. incoorect ( make sure declare a value at a time of intialisation )
// const  y;
// y = 3;
const y = 4 ; console.log(y)// correct


// Note -> It does not define a constant value. It defines a constant reference to a value.
// reassign not possible but changes in an array,object and function be possible.

// In an array
const name  = [ "Sumit ","Somya"];
//name = ["Sidharth"] // not possible to reassign
console.log(name[1]);
name[1] = "Sidharth"
console.log(name[1]);
name.push("Rahul");
console.log(name);

// In Object 
const clg = {type : "Tier - 3" , location :"Bhubneshwar"}
clg.location = "Odisha";
console.log(clg);

// 1 . block scope  : value be remain same before starting of block
const  z = 5;
console.log(z);
{
    const z  = 6;
    console.log(z);
}
console.log(z);

// 2 . redeclaring in global or block not allowed
{
    const x = 2;   // Allowed
    const x = 2;   // Not allowed
}