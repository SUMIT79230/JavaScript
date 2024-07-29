// // 1 . Object Destructuring
// const  person = {
//     name : "Sumit Kumar",
//     clg : " KIIT",
//     age : 22
// }

// person.name = "Sidharth";

// let { name,age} = person; // Perform Destructuring 
// console.log(name);
// console.log(age);

// Array of Objects
const  persons = [
    {
        name : "Sumit Kumar",
        clg : " KIIT",
        age : 22
    },
    {
        name : "Somya",
        clg : " KIIT",
        age : 19
    }
];

let {name,age} = persons[1];
console.log(name);
console.log(age);


//Array Destructuring
const cars = ["volvo","Honda","Audi"]
let [car1,car2,car3] = cars;
console.log(car1);



