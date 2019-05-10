document.addEventListener("DOMContentLoaded", setUpPage) 

function setUpPage() {
    fetch('http://localhost:3000/beers')
    .then(function(response){
        return response.json()
    }).then(function(response) {
        response.forEach(function(item) {
            displayAllBeers(item)
        })

    })
}

function displayAllBeers() {
    const beerList = document.querySelector("list-group")

    let li = document.createElement("li")
    li.className = "list-group-item"
    li.innerText = "Beer title 1"
    li.innerText = "Beer title 2"
    ul.appendChild(li)

    beerList.appendChild(li)

}

function displaySingleBeer() {
    fetch(`http://localhost:3000/beers/${id}`)
    .then(function(response) {
        return response.json()
    }).then(function(response){
        response.forEach(function(beers) {
            displayBeers(beers)
        }) 
    })
}

function displayBeers(beers) {
    const beerItems = document.createElement("beer-detail")

    let h1 = document.createElement("h1")
    h1.innerText = beers.name
    div.appendChild(h1)

    let img = document.createElement("img")
    img.src = beers.image_url
    div.appenChild(img)

    let h3 = document.createElement("h3")
    h3.innerText = beers.tagline
    div.appenChild("h3")

    let textarea = document.createElement("textarea")
    textarea.innerText = beers.description
    div.appenChild(textarea)

    let button = document.createElement("button")
    button.className = "btn btn-info"
    button.innerHTML = "Save"
    div.appenChild("button")

    button.addEventListener("click", handleSave)
        let description = {
            description: beers.description
        }

        fetch(`http://localhost:3000/beers/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify(description)
        }).then(function(response){
            return response.json()
        }).then(function(response){
    },
    beerItems.appenChild(div)
)}
