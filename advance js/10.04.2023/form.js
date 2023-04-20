const form = document.getElementById("myForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput");
  const mailInput = document.getElementById("mailInput");
  const passInput=document.getElementById('passInput')
  const genderInput=document.getElementById('genderInput')

  let total=[]
    var ski = document.getElementsByName('skills')
        var skill;
        for (var i = 0; i < ski.length; i++) {
            if (ski[i].checked) {
                skill = ski[i].value
                total.push(skill)
            }
          }
          console.log(total.value)

  const name = nameInput.value;
  console.log(name)
  const mail= mailInput.value;
  const pass=passInput.value
  const gender=genderInput.value
  const myskill=total


  if (name && mail && pass && gender && myskill) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const mailCell = document.createElement("td");
    mailCell.textContent = mail;
    row.appendChild(mailCell);

    const passCell = document.createElement("td");
    passCell.textContent = pass;
    row.appendChild(passCell);

    const genderCell = document.createElement("td");
    genderCell.textContent = gender;
    row.appendChild(genderCell);

    const skillCell = document.createElement("td");
    skillCell.textContent = myskill;
    row.appendChild(skillCell);



    const actionsCell = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      nameInput.value = name;
      mailInput.value = mail;
      passInput.value=pass;
      genderInput.value=gender;
      total=myskill
      
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

  }
  clean()
});
/*
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  form.reset();
});*/
function clean(){
  form.reset();
}