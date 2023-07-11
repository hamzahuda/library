function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let myLibrary = [
    new Book(
        "Harry Potter and the Philosopher's Stone",
        "J.K Rowling",
        123,
        true
    ),
    new Book(
        "Harry Potter and the Chamber of Secrets",
        "J.K Rowling",
        456,
        false
    ),
];

document.addEventListener("DOMContentLoaded", () => {
    // New Book Button
    document.getElementById("addBook").addEventListener("click", () => {
        console.log("pressed");
    });

    displayBooks();
});

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    booksArea = document.getElementById("books-area");
    booksArea.innerHTML = "";
    myLibrary.forEach((book) => {
        const curBook = document.createElement("div");
        curBook.classList.add("book");

        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");

        title.classList.add("title");
        author.classList.add("author");
        pages.classList.add("pages");

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;

        curBook.appendChild(title);
        curBook.appendChild(author);
        curBook.appendChild(pages);

        booksArea.appendChild(curBook);
    });
}
