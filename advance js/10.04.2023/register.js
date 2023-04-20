let arr=[]
function details(){
    let fname=document.getElementById('name').value;
    let mail=document.getElementById('mail').value;
    let pass=document.getElementById('pass').value;
    let phone=document.getElementById('phone').value;
    let gender=document.getElementById('gender').value
    //skills
    let total=[]
    var ski = document.getElementsByName('skills')
        var skill;
        for (var i = 0; i < ski.length; i++) {
            if (ski[i].checked) {
                skill = ski[i].value
                total.push(skill)
            }
}
let user_details={
    name:fname,
    mail:mail,
    password:pass,
    phone:phone,
    gender:gender,
    skills:total
}
arr.push(user_details)
}
var tbody = document.getElementById('tbody');
var table = document.getElementById("table")
function tab(){
for(i=0;i<arr.length;i++){
    let per=arr[i]     
    var row = document.createElement('tr')

    var namecell = document.createElement('td')
    namecell.textContent = per.name
    row.appendChild(namecell)


    var mailcell = document.createElement('td')
    mailcell.textContent = per.mail
    row.appendChild(mailcell)



    var passwordcell = document.createElement('td')
    passwordcell.textContent = per.password
    row.appendChild(passwordcell)

    var gendercell = document.createElement('td')
    gendercell.textContent = per.gender
    row.appendChild(gendercell)

    var phonecell = document.createElement('td')
    phonecell.textContent = per.phone
    row.appendChild(phonecell)

    var skillcell = document.createElement('td')
    skillcell.textContent = per.skills
    row.appendChild(skillcell)


   /*
    var clearcell = document.createElement('td')
    var clearButton=document.createElement('button')
    row.appendChild(clearcell)
    

    var editcell = document.createElement('td')
   var editButton=document.createElement('button')
    row.appendChild(editcell)

*/


    table.appendChild(row)
}
}
function clean(){
    event.preventDefault()
        my_form.reset()
}/*
function editable(){
    table.contentEditable=true

}*/
function editable(button){
    var rows=button.parentNode.parentNode;
    var name=rows.cell[0].textContent;
    var email=rows.cell[1].textContent;
    gender=row

}






