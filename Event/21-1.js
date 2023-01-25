const submit = document.querySelector('input[type="submit"]');
submit.addEventListener("click",() =>{
const input = document.getElementById('age');
const h1 = document.getElementsByTagName('h1');
console.log(input.value);
if(input.value >18){
   h1.innerHTML ="you can drink coffee";
}
else{
    h1.innerHTML ="you are too young to drink coffee";
}
});


