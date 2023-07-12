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

function displayBooks() {
    booksArea = document.getElementById("books-area");
    booksArea.innerHTML = "";
    myLibrary.forEach((book) => {
        const curBook = document.createElement("div");
        curBook.classList.add("book");

        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("div");

        title.classList.add("title");
        author.classList.add("author");
        pages.classList.add("pages");
        read.classList.add("read");

        title.textContent = `"${book.title}"`;
        author.textContent = `- ${book.author}`;
        pages.textContent = `${book.pages} pages`;

        curBook.appendChild(title);
        curBook.appendChild(author);
        curBook.appendChild(pages);

        if (book.read) {
            curBook.style.backgroundColor = "#9eef52";
            read.textContent = "READ";
        } else {
            curBook.style.backgroundColor = "#e72c2c";
            read.textContent = "UNREAD";
        }
        curBook.appendChild(read);

        booksArea.appendChild(curBook);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Add Book Form

    // Open the modal when the button is clicked
    const modal = document.getElementById("modal");
    document.getElementById("addBook").addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Adding the book to the array
    document
        .getElementById("confirmBook")
        .addEventListener("click", (event) => {
            event.preventDefault();

            myLibrary.push(
                new Book(
                    document.getElementById("newTitle").value,
                    document.getElementById("newAuthor").value,
                    parseInt(document.getElementById("newPages").value),
                    document.getElementById("newRead").checked
                )
            );

            modal.style.display = "none";
            displayBooks();
        });

    // Closing the modal
    document.getElementById("close-modal").addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    displayBooks();
});

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}
