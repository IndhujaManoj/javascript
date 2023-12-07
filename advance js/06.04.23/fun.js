// async function fun(){
//     return 10
// }
// console.log(fun())


async function fun(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(10)
            console.log('start')
        },1000)
    })
}

async function myfun(){
    const result=await fun()
    console.log(result,"res")
    console.log("complet")
}
myfun()



// async function fun() {
//     try {
//       // Inside the 'try' block, you can use 'await' to wait for the Promise to resolve
//       const result = await new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(10);
//         }, 1000);
//       });
  
//       // Log the result
//       console.log("Result:", result);
      
//       // You can also return the result if needed
//       return result;
//     } catch (error) {
//       // Handle errors in the 'catch' block
//       console.error("Error:", error.message);
//       // You can throw the error again if needed
//       throw error;
//     }
//   }
  

//   // Using the async function
//   async function processData() {
//     try {
//       const result = await fun();
//       console.log("Success:", result);
//       console.log("Completed");
//     } catch (error) {
//       console.error("Error in processData:", error.message);
//     }
//   }
  
//   // Calling the async function
//   processData();
  