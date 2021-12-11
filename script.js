// Grabbing elements
const collection = document.querySelector('.collection')
const collectionItem = document.querySelectorAll('.collection-item')
const noteContainer = document.querySelector('#note-container')

let selectedNoteKey;

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

// allows you to add a new note to the noteContainer
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

    // adding the remove option with div with card-action and a new link with 'delete note' text

    const divAction = document.createElement('div')
    divAction.classList.add('card-action')

    const deleteLink = document.createElement('a')
    deleteLink.innerHTML = 'Delete note'
    deleteLink.setAttribute("href", '#!')
    deleteLink.addEventListener('click', () => removeSelectedNote(key))

    divAction.appendChild(deleteLink)

    // append the title and body text to the noteContainer
    noteContainer.appendChild(span)
    noteContainer.appendChild(p)
    noteContainer.appendChild(divAction)
}

// add new note
const addNoteBtn = document.querySelector('#add-note')
const modalContainer = document.querySelector('.modal-container')
addNoteBtn.addEventListener('click', () => addNewNote())

const addNewNote = () => {

    // create new elements
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const h4 = document.createElement('h4')
    const a = document.createElement('a')

    // add classes and ids
    div1.setAttribute("id", 'modal1')
    div1.classList.add('modal')
    div2.classList.add('modal-content')
    div3.classList.add('modal-footer')
    h4.innerHTML = 'New Note'
    a.innerHTML = 'Add'
    a.classList.add('modal-close')
    a.classList.add('btn-flat')

    // add elements to each other
    div3.appendChild(a)
    div2.appendChild(h4)

    div1.appendChild(div2)
    div1.appendChild(div3)

    modalContainer.appendChild(div1)

}

// adding functionality to modal
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal')
    var instances = M.Modal.init(elems)
});

// scale in add new note

const scale = document.querySelector('#scale')
const scaleTrigger = document.querySelector('#scale-trigger')

const scaleAddNew = () => {
    scale.classList.toggle('scale-out')
    setTimeout(() => {
        scale.classList.toggle('hide')
    }, 200)
}

// adding event listener to the add new note btn
scaleTrigger.addEventListener('click', scaleAddNew)

// adding new note from form to localStorage

const myForm = document.querySelector('#form')
const keyInput = document.querySelector('#input-key')
const valueInput = document.querySelector('#input-value')

myForm.addEventListener('submit', (e) => formSubmitHandler(e))

const formSubmitHandler = (e) => {
    e.preventDefault()
    // add the new note to the local storage
    localStorage.setItem(keyInput.value, valueInput.value)
    // reset the list of displayed values
    keyInput.value = ''
    valueInput.value = ''
    // update the list to match new localStorage items
    refreshNotesList()
}

// removing a specific note

const removeSelectedNote = (key) => {
    localStorage.removeItem(key)
    refreshNotesList()
}

// refresh list of notes

const refreshNotesList = () => {
    collection.innerHTML = ''
    loopStorage()
}

// run functions
loopStorage()