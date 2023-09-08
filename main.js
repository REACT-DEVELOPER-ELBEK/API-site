async function showUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const results = await response.json()
    let str = ''
    results.map((user) =>{
        str+=`
        <div class="user__card">
        <div class="name__info">
            <div class="name">${user.name}</div>
        <div class="nickname">${user.username}</div>
        </div>
        <div class="info">Email: <a href="#" type="email">${user.email}</a></div>
        <div class="info">Wesbsite: <a href="${user.website}">${user.website}</a></div>
        <div class="info">Adress: <a href="#">${user.adress}</a></div>
        <div class="info">Phone: <a href='${user.phone}' type="tel">${user.phone}</a></div>

        <div class="buttons">
            <button><a href="./pages/posts.html">Posts</a></button>
            <button><a href="./pages/todos.html">Todos</a></button>
            <button><a href="./pages/albums.html">Album</a></button>
        </div>
    </div>
        `
    })

    parentCard.innerHTML = str
}
let parentCard = document.querySelector('.users__cards')
showUsers()