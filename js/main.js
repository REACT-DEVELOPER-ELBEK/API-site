async function showUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const results = await response.json()
    let str = ''
    results.map((user, adress) =>{
        str+=`
        <div class="user__card">
        <div class="name__info">
            <div class="name">${user.name}</div>
        <div class="nickname">${user.username}</div>
        </div>
        <div class="info">Email: <a href="#">${user.email}</a></div>
        <div class="info">Wesbsite: <a href="#">${user.website}</a></div>
        <div class="info">Adress: <a href="#">${user.adress}</a></div>
        <div class="info">Phone: <a href='${user.phone}' type="tel">${user.phone}</a></div>

        <div class="buttons">
            <button><a href="#">Posts</a></button>
            <button><a href="#">Todos</a></button>
            <button><a href="#">Album</a></button>
        </div>
    </div>
        `
    })

    parentCard.innerHTML = str
}
let parentCard = document.querySelector('.users__cards')

// function displayUsers(users){
//     let str = ''
//     users.map(() =>{
//         str+=`
//         <div class="user__card">
//         <div class="name__info">
//             <div class="name">Elbek</div>
//         <div class="nickname">fewuifewui</div>
//         </div>
//         <div class="info">Email: <a href="#"></a></div>
//         <div class="info">Wesbsite: <a href="#"></a></div>
//         <div class="info">Adress: <a href="#"></a></div>
//         <div class="info">Phone: <a href="#">elbeky829@gmail.com</a></div>

//         <div class="buttons">
//             <button><a href="#">Posts</a></button>
//             <button><a href="#">Todos</a></button>
//             <button><a href="#">Album</a></button>
//         </div>
//     </div>
//         `
//     })
//     parentCard.innerHTML = str
// }

showUsers()