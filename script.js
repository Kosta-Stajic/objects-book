const myLibrary = []


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

}

function addBookToLibrary() {
    const title = prompt("Title")
    const author = prompt("Author")
    const pages = prompt("Pages")
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}
const addNew = document.querySelector(".addBook")
const main = document.querySelector(".main")

addNew.addEventListener("click", () => {
    const form = document.createElement("form");
    form.className = "dynamic-form";
    form.setAttribute("action", "#")
    form.setAttribute("method", "post")
    form.innerHTML = `<input type="text" placeholder="Enter text" name="textInput"/> <button type="submit">Submit</button>;`
    main.appendChild(form)
})


function displayBooks() {

}