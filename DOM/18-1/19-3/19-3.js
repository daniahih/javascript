const listOfTextbox = document.querySelectorAll('.textbox');
const btn =document.getElementById('btn');
listOfTextbox[0].focus();
for(let i=0; i < listOfTextbox.length-1; i++)
{
    console.log("1")
    listOfTextbox[i].addEventListener('input',function() {
        listOfTextbox[i+1].focus();
        console.log("2");
    })
}
