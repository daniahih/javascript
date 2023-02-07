const btn=document.getElementById('btn');
const title=document.getElementById('title')
const Joke=document.getElementById('Joke')
btn.addEventListener('click',()=>{
fetch('https://api.jokes.one/jod').then(res=>res.json())
.then(data => {
    console.log(data.contents.jokes[0].joke);
    title.innerHTML=data.contents.jokes[0].joke.title  ;
    Joke.innerHTML=data.contents.jokes[0].joke.text ;
  });

})