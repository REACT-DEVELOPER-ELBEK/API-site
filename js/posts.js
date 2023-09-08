async function showUsersPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const results = await response.json()
    let str = ''
    results.map((user) => {
        str+=`
        <div class="posts__card">
        <h1>${user.body}</h1>
        <p>${user.body}</p>
        <button><a href="#">Comments</a></button>
        </div>
    `
    })
    cardParent.innerHTML = str
}
let cardParent = document.querySelector('.posts__cards')
showUsersPosts()