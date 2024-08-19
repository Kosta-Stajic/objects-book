

//query selectors
const addNew = document.querySelector(".addBook")
const mainBottom = document.querySelector(".main-bottom")


//object constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//main array
const myLibrary = []

// Ask the user for book information
function addBookToLibrary() {
    const title = prompt("Title")
    const author = prompt("Author")
    const pages = prompt("Pages")
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}

/* form for the button, still not functioning properly

addNew.addEventListener("click", () => {
    const form = document.createElement("form");
    form.className = "dynamic-form";
    form.setAttribute("action", "#")
    form.setAttribute("method", "post")
    form.innerHTML = `<input type="text" placeholder="Enter text" name="textInput"/> <button type="submit">Submit</button>;`
    mainBottom.appendChild(form)
})
*/


// main function that displays books on the page
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const allBooks = myLibrary[i];
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