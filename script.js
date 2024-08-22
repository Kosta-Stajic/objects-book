

//query selectors
const addNew = document.querySelector(".addBook")
const mainBottom = document.querySelector(".main-bottom")
const dialog = document.querySelector(".popUp")



//object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

//mark books as read



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


// form for the button, still not functioning properly

addNew.addEventListener("click", () => {
    const form = document.createElement("form");
    form.className = "dynamic-form";
    form.setAttribute("action", "#")
    form.setAttribute("dialog", "post")
    form.innerHTML = `<label for="title">Title:</label> <input type="text" id="title"placeholder="Enter text" name="textInput"/> <label for="author">Author:</label><input type="text" id="author" placeholder="Enter text" name="textInput"/> <label for="pages"># of pages:</label><input type="text" id="pages" placeholder="Enter text" name="textInput"/><label>Have you read it?</label> <input class="isRead"type ="checkbox"> </input><button type="submit">Submit</button> `
    dialog.appendChild(form)
    dialog.showModal()



    //submit function
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        //extract the data
        const title = form.querySelector("#title").value
        const author = form.querySelector("#author").value
        const pages = form.querySelector("#pages").value
        const read = form.querySelector(".isRead").checked ? "Read" : "Not read"

        //new variable
        const newBook = new Book(title, author, pages, read)
        myLibrary.push(newBook);
        dialog.close()
        dialog.innerHTML = ""
        displayBooks()

    })
})



//fixing escape key multiplying forms on the screen
function handleEscape(event) {
    if (event.key === "Escape") {
        dialog.innerHTML = ""
        dialog.close()
    }
}
dialog.addEventListener("keydown", handleEscape)


// main function that displays books on the page
const displayedBookTitles = new Set()
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
        titleDiv.className = "bookTitle"
        card.appendChild(titleDiv)
        //create author div
        const authorDiv = document.createElement("div")
        authorDiv.className = "bookAuthor"
        authorDiv.textContent = `Author: ${allBooks.author}`
        card.appendChild(authorDiv)
        //create pages div
        const pagesDiv = document.createElement("div")
        pagesDiv.textContent = `Pages: ${allBooks.pages}`
        pagesDiv.className = "bookPages"
        card.appendChild(pagesDiv)
        const readButton = document.createElement("button")
        readButton.className = "readToggle"
        readButton.textContent = allBooks.read;
        readButton.addEventListener("click", () => {
            allBooks.read = allBooks.read === "Read" ? "Not Read" : "Read";
            readButton.textContent = allBooks.read;
        });

           
        card.appendChild(readButton)
        const deleteBook = document.createElement("button")
        deleteBook.textContent = "Delete"
        deleteBook.className = "remove"
        deleteBook.addEventListener ("click", ()=>
            mainBottom.removeChild(card)
        )
        card.appendChild(deleteBook);
        mainBottom.appendChild(card)
    }
}




    /* Select and manipulate the button
    const button = document.querySelector(".readable");
    if (button) {
      let isRead = false; // Initial state
      button.addEventListener('click', () => {
        isRead = !isRead; // Toggle the sDiv
    }
    */