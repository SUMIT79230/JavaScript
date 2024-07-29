// Note 
// The spread operator ... is used to expand or spread iterable elements into individual elements.
// It can be used with arrays, objects, and function arguments.
// It provides an easy and concise way to copy, combine, and manipulate data structures.
// Note that it performs a shallow copy, so nested objects or arrays are still referenced.

// use 1 : Expanding Elements
const arr = [1,2,3];
console.log(arr);
const new_arr = [...arr,4,5];
console.log(new_arr);

// use 2 : Copying Arrays
const arr3  = [...arr];
console.log(arr3);

// use 3 : function argument
function add(x,y,z)
{
    return x + y + z;
}
const numbers = [1,2,3];
console.log(add(...numbers));

// use 4 : The spread operator creates a shallow copy . 
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };
copy.b.c = 3;
console.log(original.b.c); 
