let records = [];

// Function to add a record to the form and display it in the table
function addRecord() {
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;
  const email = document.getElementById("emailInput").value;

  // Create a new record object
  const record = {
    name: name,
    age: age,
    email: email
  };

  // Add the record to the records array
  records.push(record);

  // Add the record to the table
  const tableBody = document.getElementById("tableBody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td>
      <button type="button" onclick="editRecord(${records.length - 1})">Edit</button>
      <button type="button" onclick="deleteRecord(${records.length - 1})">Delete</button>
    </td>
  `;
  tableBody.appendChild(newRow);
  Actions

  // Clear the form
  clearForm();
}

// Function to submit the form (placeholder for backend integration)
function submitForm() {
  // Placeholder for backend integration
  console.log("Form submitted:", records);
}

// Function to clear the form
function clearForm() {
  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";
  document.getElementById("emailInput").value = "";
}

// Function to edit a record in the form
function editRecord(index) {
  const record = records[index];
  document.getElementById("nameInput").value = record.name;
  document.getElementById("ageInput").value = record.age;
  document.getElementById("emailInput").value = record.email;
  records.splice(index, 1);
  document.getElementById("submitBtn").innerText = "Update";
}

// Function to delete a record from the form and table
function deleteRecord(index) {
  records.splice(index, 1);
  document.getElementById("tableBody").deleteRow(index);
}