const input = document.getElementById("username");
const button = document.getElementById("search");
const result = document.getElementById("result");

const searchedUsers = new Set();

button.addEventListener("click", async () => {
//i want to take the value from the input value , and now i want to see if the input value is emapty or not 
// i will get the data fetch github/username 
// print the date inside the console 
// and then i want to add a div that coutain a pic and data 
 const username=input.value 
 console.log(username)
 if(username === ""){
  return alert('please add a username to search ')
 }
 const res = await fetch (`https://api.github.com/users/${username}`).then(res => res.json())
 console.log(res)
 result.innerHTML = `
 <div class="card">
   <img src="${res.avatar_url}" alt="${res.name}" />
   <h2>${res.login}</h2>
   <p>Public Repos: ${res.public_repos}</p>
   <a href="${res.html_url}" target="_blank">View Profile</a>
 </div>
`
})


