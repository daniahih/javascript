const startHere=document.getElementsByClassName('start-here')[0]
startHere.innerText='main title';

const addedToUl = document.querySelector('ul li ul');
const newLi = document.createElement('li');
newLi.innerText = 'sub title 4';
addedToUl.appendChild(newLi);
 
const deleteFromLi = document.querySelector('ul li ul');
deleteFromLi.removeChild(deleteFromLi.lastElementChild);


const p = document.querySelector('p');

p.innerText = 'Dania is a bad coder'