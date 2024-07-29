// Arrow funtion basically used to write shorter function syntax

// Tradional Method
let add = function()
{
    return 5+6;
}
console.log(add());

// with arrow function
arrow = ()=>{
    return 6+6;
}
arrow1 = () => 7+7;
console.log(arrow());
console.log(arrow1());

// this Binding: allow by arrow function
// Regular Function: The value of this depends on how the function is called. It can be dynamic and might change based on the context.
// Arrow Function: The value of this is lexically bound, meaning it takes this from the surrounding code where the arrow function is defined.
function RegularFunction() 
{
    this.value = 42;
    setTimeout(function() {
      console.log(this.value); // `this` here refers to the global object (or undefined in strict mode)
    }, 1000);
  }
  
  new RegularFunction(); // Output: undefined (or global object in non-strict mode)
  
  function ArrowFunction() {
    this.value = 42;
    setTimeout(() => {
      console.log(this.value); // `this` refers to the instance of ArrowFunction
    }, 1000);
  }
  
  new ArrowFunction(); // Output: 42
  