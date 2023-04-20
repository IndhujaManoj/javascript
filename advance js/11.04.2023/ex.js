// Get form and buttons by their IDs
const myForm = document.getElementById("myForm");
const submitBtn = document.getElementById("submitBtn");
const editBtn = document.getElementById("editBtn");

// Add event listener for form submission
myForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Retrieve the submitted form data
  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  // Perform the create operation, e.g., save the name to a database or a file
  // Replace this code with your actual create logic
  console.log("Name submitted: " + name);
  
  // Reset the form
  myForm.reset();
});

// Add event listener for edit button click
editBtn.addEventListener("click", () => {
  // Perform the edit operation, e.g., update the name in the form
  // Replace this code with your actual edit logic
  const nameInput = document.getElementById("name");
  nameInput.value = "Updated Name";
});