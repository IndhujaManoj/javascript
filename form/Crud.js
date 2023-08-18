
function okHandle(e) {
    e.preventDefault()
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    let table = document.getElementById('table');
    let form = document.getElementById('form')
    let row = table.insertRow()
    let namecell = row.insertCell(0);
    let passwordCell = row.insertCell(1)
    let editCell = row.insertCell(2)
    let deleteCell = row.insertCell(3)
    namecell.innerHTML = name
    passwordCell.innerHTML = password
    editCell.innerHTML = `<button onclick="edit(this)">Edit</button>`
    deleteCell.innerHTML = `<button onclick="deleteHandle(this)">Delete</button>`
    form.reset()
}

function edit(button) {
    let selectedRow = button.parentNode.parentNode
    console.log(selectedRow)
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;// when edit button pressed=> table name go to form
    document.getElementById('password').value = selectedRow.cells[1].innerHTML

}
function deleteHandle(button){
    let row= button.parentNode.parentNode
    row.remove()
}