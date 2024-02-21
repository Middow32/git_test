var frmBook = document.querySelector('#frmBook');
const btnBook = document.querySelector('#btnBook');

var i = 0;
const myLibrary = [];

// Creates books
function Book(title, firstName, lastName, pages) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.pages = pages; 
}

// Adds books to the myLibrary array
function addBookToLibrary() {

    const title = document.querySelector('#bookTitle');
    const authorFirst = document.querySelector('#authorFirst');
    const authorLast = document.querySelector('#authorLast');
    const pages = document.querySelector('#pageNum');

    const newBook = new Book(
        title.value, authorFirst.value, authorLast.value, pages.value);
    myLibrary.push(newBook);

    main.innerHTML = "";
    showBooks(myLibrary);
}

function showBooks() {
    myLibrary.forEach(book => {
        var main = document.querySelector('#main');
        var div = document.createElement("div");
        var card = 
            `<div class = "card" data-index = ${i}>
                <p>Title: ${book.title}</p>
                <p>Author First: ${book.firstName}</p>
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

