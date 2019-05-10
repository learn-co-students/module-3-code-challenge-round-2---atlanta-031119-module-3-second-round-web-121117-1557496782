/* For this challenge, it is important to work iteratively, one feature at a time, before moving on to the next. You should prioritize making code that works over attempting all of the deliverables.

Step 1 - Display All Beer Names
When the page loads, I should see a list of all of the beer names retrieved from the API on the left hand side of the screen. The API endpoint we need to retrieve all the beers is a conventional RESTful route

Route: GET http://localhost:3000/beers
Styling
Bootstrap is loaded into this project via a link tag in the head of the html. Generally, do not worry about styling in this application.

One important point is that for the beer names to show up correctly, the html should have the following class names:

<ul class="list-group">
  <li class="list-group-item">Beer title 1</li>
  <li class="list-group-item">Beer title 2</li>
  </ul>

*/

const beerURL = `http://localhost:3000/beers`

document.addEventListener('DOMContentLoaded', (e) => { getBeers()
})

function getBeers() {
  fetch(beerURL)
  .then(res => res.json())
  // .then(beer => console.log("getBeer()", beer))
  .then((beers) => renderBeerList(beers))
}

function renderBeerList(beers) {
  beers.forEach(beer => {
    const beerUL = document.querySelector(`.list-group`)
    let beerLI = document.createElement(`li`)
    beerLI.className = `list-group-item`
    beerLI.textContent = beer.name
    beerLI.addEventListener('click', (e) => { getBeer(beer.id) })
    beerUL.appendChild(beerLI)
  });
}

// //* Step 2 - Display Single Beer Details
// When I click a beer name, the application should reveal more information about that particular beer. See the example above for the additional information that should be displayed.

// Route: GET http://localhost:3000/beers/:id

function getBeer(beerID) {
  fetch(beerURL + `/${beerID}`)
    .then(res => res.json())
    .then((beer) => renderBeerMain(beer))
}
// The beer details should be added to this div

// <div id="beer-detail">
function renderBeerMain(beer) {
  const beerDetailDiv = document.getElementById(`beer-detail`)
  let h1BName = document.createElement(`h1`)
  h1BName.textContent = beer.name
  let imgBeer = document.createElement(`img`)
  imgBeer.src = beer.image_url
  let h3BTag = document.createElement(`h3`)
  h3BTag.textContent = beer.tagline
  let textBDescr = document.createElement(`textarea`)
  textBDescr.iscontenteditable
  textBDescr.textContent = beer.description
  let btnSave = document.createElement(`button`)
  btnSave.type = `button`
  btnSave.innerText = `Save`
  btnSave.addEventListener('click', (e) => {
    handleSaveClick(beer.id, e.target.previousSibling.textContent)
  })



  beerDetailDiv.appendChild(h1BName)
  beerDetailDiv.appendChild(imgBeer)
  beerDetailDiv.appendChild(h3BTag)
  beerDetailDiv.appendChild(textBDescr)
  beerDetailDiv.appendChild(btnSave)

}
function handleSaveClick(beerID, beerDescr) {

    let newTextData = { "description": beerDescr }
    fetch((beerURL + `/${beerID}`),{
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  body: JSON.stringify(newTextData)
}).catch(error => (console.error('PATCH UPDATE NOT SUCCESSFUL')))
}


// </div>
// The html should look something like:

// <h1>Beer Name</h1>
// <img src="<add beer img url here>">
// <h3>Beer Tagline</h3>
// <textarea>Beer Description</textarea>
// <button id="edit-beer" class="btn btn-info">
//   Save
// </button>
// Step 3 - Edit Beer Details
// When looking at the details of a beer, I can edit the current description of a beer. Clicking the 'Save' button will save any changes added to the description in the database. The edited beer should also update the DOM. For example, if I update the details of "Beer A" then click on another beer, when I go back to "Beer A", the description should be updated.

// To update a beer you'll need to make a PATCH request

// Route: PATCH http://localhost:3000/beers/:id
// Body:
//   {description: "your new description"}
// Headers:
//   {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
// Important Notes:

// For all intents and purposes, PATCH behaves the same as POST. If you know how to POST, you know how to PATCH
// When using fetch to make a PATCH request, be sure to capitalize method: 'PATCH'
// Considerations
// You are free to solve this in any way you choose. It is not required that you have ES6 classes or use Object Orientation. We would recommend beginning with a straightforward functional implementation and refactoring to objects as needed.

// When you click on an individual <li> you will need some of way of determining which particular beer was clicked on. How will you solve this problem?

