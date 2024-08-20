

//query selectors
const addNew = document.querySelector(".addBook")
const mainBottom = document.querySelector(".main-bottom")
const dialog = document.querySelector(".popUp")



//object constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//main array to populate
const myLibrary = []

// Ask the user for book information
function addBookToLibrary() {
    const title = prompt("Title")
    const author = prompt("Author")
    const pages = prompt("Pages")
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}

//save data function

/*
let formData = new FormData (formSelect)
for (let [key, value] of formData.entries()) {
    myLibrary.push({key, value})
    
    }
*/

 // form for the button, still not functioning properly

addNew.addEventListener("click", () => {
    const form = document.createElement("form");
    form.className = "dynamic-form";
    form.setAttribute("action", "#")
    form.setAttribute("dialog", "post")
    form.innerHTML = `<label for="title">Title:</label> <input type="text" id="title"placeholder="Enter text" name="textInput"/> <label for="author">Author:</label><input type="text" id="author" placeholder="Enter text" name="textInput"/> <label for="pages"># of pages:</label><input type="text" id="pages" placeholder="Enter text" name="textInput"/> <button type="submit">Submit</button> <button class="readable" type="toggle">Read</button>`
    dialog.appendChild(form)
    dialog.showModal()
    
    //submit function
    form.addEventListener("submit", (event) =>{
        event.preventDefault();
    //extract the data
    const title = form.querySelector ("#title").value
    const author = form.querySelector ("#author").value 
    const pages = form.querySelector("#pages").value

    //new variable

    const newBook = new Book(title,author,pages)
        

    myLibrary.push(newBook);

    dialog.close()
    dialog.innerHTML =""

    displayBooks ()
   
})
})

//
const displayedBookTitles = new Set()

// main function that displays books on the page
function displayBooks() {

    for (let i = 0; i < myLibrary.length; i++) {
        const allBooks = myLibrary[i];
        if (displayedBookTitles.has(allBooks.title)) {
            continue; // Skip this book if it has already been displayed
        }

        displayedBookTitles.add(allBooks.title);
        //create parent div
        const card = document.createElement("div")
        card.className = "bookCard"
        //create title div
        const titleDiv = document.createElement("div")
        titleDiv.textContent = `Title: ${allBooks.title}`
        card.appendChild(titleDiv)
        //create author div
        const authorDiv = document.createElement("div")
        authorDiv.textContent = `Author: ${allBooks.author}`
        card.appendChild(authorDiv)
        //create pages div
        const pagesDiv = document.createElement("div")
        pagesDiv.textContent = `Pages: ${allBooks.pages}`
        card.appendChild(pagesDiv)
        mainBottom.appendChild(card)
    }
}