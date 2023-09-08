async function showTodos(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const results = await response.json()
    let str = ''
    results.map((todos = todos.filter(target.id)) => {
        str+=`
        <div class="todos__card">
        <h1>${todos.title}</h1>
        <p class="todos-status">${todos.completed}</p>
        </div>
    `
    })
    cardParent.innerHTML = str
}
let todosStatus = document.querySelector('.todos-status')
let cardParent = document.querySelector('.todos__cards')
showTodos()