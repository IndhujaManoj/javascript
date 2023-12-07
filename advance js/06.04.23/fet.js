// // const news=new Promise((resolve,reject)=>{
// //     let final=true
// //     if(final){
// //         resolve('success')
// //     }else{
// //         reject('failure')
// //     }
// // })
// // console.log(news)

// function divide(x, y) {
//     try {
//       if (y === 0) {
//         throw new Error("Division by zero is not allowed.");
//       }
//       let result = x / y;
//       console.log("Result:", result);
//     } catch (error) {
//         console.log(error,"klkj")
//     }
//   }
  
//   // Example usages
// //   divide(10, 2);  // Output: Result: 5
  // divide(10, 0);  // Output: (No result due to the error)
  



// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const fetchData = fetch(apiUrl);

// fetchData
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });
// process.stdout.write('What is your name? ');



