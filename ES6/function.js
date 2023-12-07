// const num=(a,b)=>a+b;
// console.log(num(10,20));

// const a=(a,b)=>{
//     return a+b
// }
// console.log(a(10,20))

//closerfunction

// const outerFunction = (x) => {
//     const innerFunction = (y) => {
//       return x + y;
//     };
//     return innerFunction;
//   };

//   const closure = outerFunction(10);
//   console.log(closure(5)); // Output: 15 (10 + 5)

// function example() {
//     if (true) {
//         var varVariable = "I am var";
//         let letVariable = "I am let";
//     }

//     // console.log(letVariable); // ReferenceError: letVariable is not defined
// }
//      console.log(varVariable);  // Accessible

// example()

// function sample(a,b){
//     return a+b
// }
// console.log(sample(10,20))

// const sample=(a,b)=>{
//    console.log(a+b)
//    console.log(a-b)
//    console.log(a*b)
//    console.log(a/b)

// // return a/b

// }
// sample(10,20)

// let a = {
//   name: "hello",
//   age: 20,
// };
// let b = {
//   name: "hellos",
//   age: 202,
// };
// const c = { ...a, ...b };

// console.log(c)

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) =>{
//      accumulator + currentValue, 0;

// })

// console.log(sum); 

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.map((value, index) => {
//   console.log(value,"value")
//   console.log(index+1,"index")
// } );


// const fruites=new Map([
//   ["apple",344],
//   ["orange",45]
// ])
// console.log(fruites)

// Original array of objects
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

// Mapping function: Add a new property "isAdult" based on age
const mappedPeople = people.map(person => ({
  ...person,
  isAdult: person.age >= 18
}));

// Resulting array of objects with the new "isAdult" property
console.log(mappedPeople);
