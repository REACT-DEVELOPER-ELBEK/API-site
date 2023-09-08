async function showPhoto(){
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    const results = await response.json()
    let str = ''
    results.map((photo = photo.filter(target.id)) => {
        str+=`
        <div class="album__card">
        <h1>${photo.title}</h1>
        <button><a href="#">Photos</a></button>
        </div>
    `
    })
    cardParent.innerHTML = str
}
let cardParent = document.querySelector('.photo__cards')
showPhoto()