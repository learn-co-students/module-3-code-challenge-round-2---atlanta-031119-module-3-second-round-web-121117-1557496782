document.addEventListener('DOMContentLoaded', fetchBeers)

function fetchBeers() {
  fetch('http://localhost:3000/beers')
  .then(res => res.json())
  .then(data => displayBeers(data))
}

function displayBeers(data) {
  data.forEach(beer => beerList(beer))
}

function beerList(beer) {
  let ul = document.querySelector('#list-group')
  let li = document.createElement('li')
  li.innerText = beer.name
  li.dataset.id = beer.id
  li.className = 'list-group-item'
  ul.appendChild(li)
  li.addEventListener('click', displayDetails)
}

function displayDetails(e) {
  console.log('beer id:', e.target.dataset.id)
  fetch(`http://localhost:3000/beers/${e.target.dataset.id}`)
  .then(res => res.json())
  .then(beer => beerInfo(beer))
}

function beerInfo(beer) {
  console.log(beer)
  let div = document.querySelector('#beer-detail')

  let h1 = document.createElement('h1')
  h1.innerText = beer.name

  let img = document.createElement('img')
  img.src = beer.image_url

  let h3 = document.createElement('h3')
  h3.innerText = beer.tagline

  let textarea = document.createElement('textarea')
  textarea.innerText = beer.description

  let button = document.createElement('button')
  button.innerText = 'Save'
  button.className = 'btn btn-info'
  button.dataset.id= beer.id
  button.addEventListener('click', handleClick)

  div.appendChild(h1)
  div.appendChild(img)
  div.appendChild(h3)
  div.appendChild(textarea)
  div.appendChild(button)
}

function handleClick(e) {
  let obj = {description: e.target.previousSibling.value}
  console.log('button', e.target.previousSibling.value)
  fetch(`http://localhost:3000/beers/${e.target.dataset.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
}
