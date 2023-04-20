const form = document.getElementById("myForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", (event) => {
  event.preventDefault();
const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");

  const name = nameInput.value;
  const age = ageInput.value;

  if (name && age) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = age;
    row.appendChild(ageCell);

    const actionsCell = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      nameInput.value = name;
      ageInput.value = age;
      row.remove();
    });
    actionsCell.appendChild(editButton);
    const deleteButton=document.createElement('button')
    deleteButton.textContent='Delete'
    deleteButton.addEventListener('click',()=>{
      row.remove()
    })
    actionsCell.appendChild(deleteButton);


    row.appendChild(actionsCell);

    tableBody.appendChild(row);

    nameInput.value = "";
    ageInput.value = "";
  }
});

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  form.reset();
});