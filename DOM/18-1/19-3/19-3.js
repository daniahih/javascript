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
listOfTextbox[0].addEventListener('paste',(event)=>{
    let pasteData = (event.clipboardData || window.clipboardData).getData('text');
    pasteData = pasteData.split('');
    for(let i=0; i < listOfTextbox.length; i++)
    {
        
        listOfTextbox[i].value=pasteData[i];
    }
    document.activeElement.blur();
})


btn .addEventListener('click',()=> {
    alert('thankyou')
    location.reload();
})