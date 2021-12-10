// Grabbing elements
const collection = document.querySelector('.collection')
const collectionItem = document.querySelectorAll('.collection-item')

console.log(localStorage)

// loop through current localStorage

const loopStorage = () => {
    for(let i = 0; i < localStorage.length; i++ ) {
        // console.log(localStorage.key(i))

        // create the div with class collection-item
        let div = document.createElement("div")
        div.classList.add("collection-item")
        div.innerHTML = localStorage.key(i)


        // create i tag with the send icon and add to div
        let icon = document.createElement("i")
        icon.classList.add("material-icons")
        icon.classList.add("right")
        icon.innerHTML = "send"

        div.appendChild(icon)

        // add new item to the list
        collection.appendChild(div)

        // add event listener to the item
        div.addEventListener('click', () => console.log(div.innerText))
        
    }
}

// run functions
loopStorage()