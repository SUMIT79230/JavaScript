// The for/of statement is used to iterate over the values of iterable objects in JavaScript.

// syntax 
// for(const item(current value in iteration) of iterable(object))
// {

// }

//Note : for/in use when order is  important / or you can also use Array.forEach()
    // for/of use when order is not important

// use 1 . Arrays
const numbers =[1,2,3,4,5];
let sum1 = 0;

for(let index in numbers)
{
    sum1 = sum1 + numbers[index];
    console.log(sum1);
}
console.log(sum1);

let numbers1 = [1, 2, 3];

numbers1.forEach(function(number, index, numbers1) {
  console.log('\nElement at index ' + index + ': ' + number);
  console.log('Original array    : ' + numbers1);
});



// use 2 . string (sequence of charcaters)
const name = "Sumit";
for(const char of name)
{
    console.log(char);
}

// Javascript map -> it hold key-value pairs where keys can be any datatypes.
// create map by 
//  1.passing array to new Map()
//  2.create a map and use Map.set()

// const fruits = new Map([ ["apple",40 ] ,["Banana",30 ],["Orange",80 ] ]);
const fruits = new Map(); // always use capital 'M'

// The set() method can also be used to change existing Map values:
fruits.set("apple",40);
fruits.set("banana",30);
fruits.set("orange",80);

// The get() method gets the value of a key in a Map:
console.log(fruits.get("apple"));
typeof(fruits);

// Method	    Description
// new Map()	Creates a new Map object
// clear()	    Removes all the elements from a Map
// delete()	    Removes a Map element specified by a key
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// get()	    Gets the value for a key in a Map
// groupBy()	Groups object elements according to returned callback values
// has()	    Returns true if a key exists in a Map
// keys()	    Returns an iterator object with the keys in a Map
// set()	    Sets the value for a key in a Map
// size     	Returns the number of Map elements
// values()	    Returns an iterator object of the values in a Map
