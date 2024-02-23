var frmBook = document.querySelector('#frmBook');
const btnBook = document.querySelector('#btnBook');
var isRead = "unchecked";
var i = 0;
const myLibrary = [];

// Creates books
function Book(title, firstName, lastName, pages, bookRead) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.pages = pages;
    this.bookRead = bookRead;
}

// Adds books to the myLibrary array
function addBookToLibrary() {

    const title = document.querySelector('#bookTitle');
    const authorFirst = document.querySelector('#authorFirst');
    const authorLast = document.querySelector('#authorLast');
    const pages = document.querySelector('#pageNum');
    var bookRead = isRead;

    const newBook = new Book
        (title.value, authorFirst.value, authorLast.value, pages.value, bookRead);

    myLibrary.push(newBook);

    main.innerHTML = "";
    showBooks(myLibrary);
}

function showBooks() {
    myLibrary.forEach(book => {
        var main = document.querySelector('#main');
        var div = document.createElement("div");

        var card = 
            `<div class = "card">
                <div class = "cardCol">
                    <p>Title: ${book.title}</p><br>
                    <p>Author: ${book.firstName} ${book.lastName}</p><br>
                    <p>Pages: ${book.pages}</p><br>
                    <p>Read <input class = "checkbox" type = "checkbox" ${book.bookRead}></p>                
                </div>
            </div>`;   
            

        main.innerHTML += card;       

    });
}

// Toggles the display of the form
function frmDisplay() {
    var frmToggle = document.querySelector('.frmToggle');
    
    if (frmToggle.style.display == "none") {
        frmToggle.style.display = "block";
    }
    else {
        frmToggle.style.display = "none";
    }
}

function readStatusChange() {
    const readStatus = document.querySelector('.readSVG');
    if (readStatus.style.fill == "gray") {
        readStatus.style.fill = "green";
        isRead = "checked";
    }
    else {
        readStatus.style.fill = "gray";
        isRead = "unchecked";
    }

}

function deleteBook() {
    if(myLibrary([deleteBook])) {
        delete myLibrary[deleteBook];
        console.log("Reset Commit test");
    }
}