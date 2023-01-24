const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];

    const ol = document.createElement('ol');
    const div= document.createElement('div');
const body=document.body
body.append(div)
div.append(ol)
    users.forEach((element)=>{
        const fullName = element.firstName +" "+ element.lastName; 
        console.log(fullName)
            const li =document.createElement('li')
            li.innerText=fullName
            ol.append(li)
    })
    ol.style.listStyle= 'none';


    // const h1 = body.createElement('h1');
    // h1.innerText = 'lllll';
// body.innerHTML = '<h1 id = "11"> LLLLLL </h1>'