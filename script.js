// Grabbing elements
const collection = document.querySelector('.collection')
const collectionItem = document.querySelectorAll('.collection-item')
const noteContainer = document.querySelector('#note-container')

console.log(localStorage)

// loop through current localStorage

const loopStorage = () => {
    for(let i = 0; i < localStorage.length; i++ ) {
        // console.log(localStorage.key(i))

        // create the div with class collection-item
        let div = document.createElement("div")
        div.classList.add("collection-item")

        // create span tag with class key-title
        let span = document.createElement('span')
        span.innerText = localStorage.key(i)

        // add the span to the div
        div.appendChild(span)

        // create i tag with the send icon and add to div
        let icon = document.createElement("i")
        icon.classList.add("material-icons")
        icon.classList.add("right")
        icon.innerHTML = "send"

        div.appendChild(icon)

        // add new item to the list
        collection.appendChild(div)

        // add event listener to the item
        div.addEventListener('click', () => changeDisplayedNote(span.innerText))
    }
}

const changeDisplayedNote = (key) => {
    // removing the current note
    noteContainer.innerHTML = ''

    // grab the localStorage item selected
    // the item we get in the function is already the title
    const value = localStorage.getItem(key)
    
    // create the span for title and the new p tag for the body of the note
    const span = document.createElement('span')
    const p = document.createElement('p')

    // add the title to the new span title and the class
    span.innerHTML = key
    span.classList.add('card-title')
    // add the text to the p tag and also add the class to it
    p.innerHTML = value
    p.classList.add('card-text')
    // append the title and body text to the noteContainer
    noteContainer.appendChild(span)
    noteContainer.appendChild(p)
}

// run functions
loopStorage()