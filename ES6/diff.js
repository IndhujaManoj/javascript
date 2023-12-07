// function findMaxDifference(arr) {
//     // Initialize maxDiff with the difference of the second and first elements of the array
//     let maxDiff = arr[1] - arr[0];

//     // Initialize minElement with the first element of the array
//     let minElement = arr[0];

//     // Iterate through the array starting from the second element (index 1)
//     for (let i = 1; i < arr.length; i++) {
//         // Update maxDiff to be the maximum of its current value and the difference of the current element and minElement
//         if (maxDiff < arr[i] - minElement) {
//             maxDiff = arr[i] - minElement;
//         }

//         // Update minElement to be the minimum of its current value and the current element
//         if (minElement > arr[i]) {
//             minElement = arr[i];
//         }
//     }

//     // Return the final maximum difference found
//     return maxDiff;
// }

// // Test the function with the array [6, 4, 66, 8, 9]
// console.log(findMaxDifference([6,4,2,1]));  // Output: 62



// let a=[1,2,3,4,5,5]
// let b=[]
// for(let i=0;i<a.length;i++){
// for(let j=0;j<a.length;j++){
//    if(a[i]==a[j]){
//     b.push(a[i])
//    }
// }
    
// }
// console.log(b)

// const myArray = ['a', 'b', 'c'];

// const keysArray = Array.from(myArray.keys());
// console.log(keysArray)

// const resultArray = keysArray.map(key => {
//   console.log(key); // Output: 0, 1, 2
//   return key;
// });

// resultArray will be [0, 1, 2]


// let a="10"
// let b="5"
// let c=(eval(a)+eval(b))
// console.log(c)

// const text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';

// const obj = JSON.parse(text);

//  obj.age = eval("(" + obj.age +" )");


//  console.log(obj.age())

// let a=["a","b","c"]
// console.log(a.includes("c",3))

//  const myArray = ['a', 'b', 'c',"d",'e'];
// //  console.log(myArray.slice(1,3))//b,c
// //  console.log(myArray.slice(1,3))//b,c
// console.log(myArray.slice(-2))//b,c
// console.log(myArray)

//  const myArray = ['a', 'b', 'c',"d",'e','f'];
//console.log(myArray.splice(1))//[ 'b', 'c', 'd', 'e' ,'f']
//console.log(myArray)

 //console.log(myArray.splice(1,2))//[ 'b', 'c']
//console.log(myArray)//[ 'a', 'd', 'e', 'f' ]

//  console.log(myArray.splice(1,2)) //[ 'b', 'c']

// console.log(myArray) //[ 'a', 'd', 'e', 'f' ]

 const array = [1, 2, 3, 4, 5];
const removed = array.splice(1);
 console.log(array);   // [1]
console.log(removed);  // [2, 3]



