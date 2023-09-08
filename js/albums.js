async function showAlbum(){
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    const results = await response.json()
    let str = ''
    results.map((album = album.filter(target.id)) => {
        str+=`
        <div class="album__card">
        <h1>${album.title}</h1>
        <button><a href="./pages">Photos</a></button>
        </div>
    `
    })
    cardParent.innerHTML = str
}
let cardParent = document.querySelector('.album__cards')
showAlbum()