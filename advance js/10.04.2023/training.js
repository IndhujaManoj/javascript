document.getElementById("skillsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const checkedSkills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value); // Get checked skills
    if (checkedSkills.length > 0) {
      const table = document.getElementById("skillsTable");
      const newRow = table.insertRow(); // Insert new row
      const skillCell = newRow.insertCell();
      const actionCell = newRow.insertCell();
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function() {
        // Move skill value back to the form for editing
        const form = document.getElementById("skillsForm");
        const skillInputs = form.querySelectorAll('input[name="skills"]');
        skillInputs.forEach(input => {
          if (input.value === skillCell.textContent) {
            input.checked = true;
          } else {
            input.checked = false;
          }
        });
        newRow.remove(); // Remove row from table
      });
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        newRow.remove(); // Remove row from table
      });
      skillCell.textContent = checkedSkills.join(", "); // Display selected skills in table
      actionCell.appendChild(editButton);
      actionCell.appendChild(deleteButton);
    }
  });
  
  document.getElementById("skillsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const checkedSkills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value); // Get checked skills
    if (checkedSkills.length > 0) {
      const table = document.getElementById("skillsTable");
      const newRow = table.insertRow(); // Insert new row
      const skillCell = newRow.insertCell();
      const actionCell = newRow.insertCell();
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";}
      editButton.addEventListener("click", function() {
        // Move skill value back to the form for editing
        const form = document.getElementById("skillsForm");
        const skillInputs = form.querySelectorAll('input[name="skills"]');
        skillInputs.forEach(input => {
          if (input.value === skillCell.textContent) {
            input.checked = true;
          } else {
            input.checked = false;
          }
        });
    });
});

