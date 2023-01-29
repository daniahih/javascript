const name =document.getElementById('name');
const age =document.getElementById('age');
const email=document.getElementById('email');
const submit =document.getElementById('submit')
let textFlag = false; 
submit.addEventListener('click', confirmSubmit);
function confirmSubmit(e) {
    let text = `You have enterd: name: ${name.value}, age: ${age.value}, email: ${email.value}. Do you want  to submit?`
    e.preventDefault();
    if (confirm(text)) {
        if(textFlag == false) {
        
            let confirmText = document.createElement('p');
            confirmText.innerHTML = `Submitted successfully!`;
            confirmText.style.fontSize = "30px";
            confirmText.style.color = "red";
            submit.insertAdjacentElement('afterend', confirmText);
            textFlag = true;
        }
    }
}