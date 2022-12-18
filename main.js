let bookStorage = [
  { title: "fwefwef", author: "fwefwef", pages: 124124124, key: 124124 },
];
const form = document.querySelector("form");
const bookScreen = document.querySelector(".books");
document.querySelector(".show-modal").addEventListener("click", () => {
  document.querySelector(".modal-wrapper").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal-wrapper").style.display = "none";
});
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.key = Date.now();
}

const addBookToLibrary = (book) => {
  bookStorage.push(book);
  renderBook(book);
};
var renderBook = function ({ title, author, pages, status, key }) {
  // container
  const bookElement = document.createElement("div");
  bookElement.classList.add("book-item");
  bookElement.setAttribute("data-book", key);
  // title
  const bookTitle = document.createElement("h2");
  bookTitle.innerText = title;
  // author
  const bookAuthor = document.createElement("p");
  bookAuthor.innerText = `Author: ${author}`;
  // pages
  const bookPages = document.createElement("p");
  bookPages.innerText = `Pages: ${pages}`;
  // status
  const bookStatus = document.createElement("label");
  bookStatus.innerText = "Book is Read";
  const bookStatusInput = document.createElement("input");
  bookStatusInput.setAttribute("type", "checkbox");
  bookStatusInput.setAttribute("type", "checkbox");
  bookStatusInput.onchange = (e) => {
    const currentBook = bookStorage.find((b) => b.key === key);
    currentBook.status = e.target.checked;
  };
  bookStatusInput.checked = status;
  bookStatus.appendChild(bookStatusInput);
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  removeBtn.onclick = () => {
    bookStorage = bookStorage.filter((b) => b.key !== key);
    const bookToBeRemoved = document.querySelector(`[data-book="${key}"]`);
    bookScreen.removeChild(bookToBeRemoved);
  };

  bookElement.appendChild(bookTitle);
  bookElement.appendChild(bookAuthor);
  bookElement.appendChild(bookPages);
  bookElement.appendChild(bookStatus);
  bookElement.appendChild(bookStatus);
  bookElement.appendChild(removeBtn);

  bookScreen.appendChild(bookElement);
};

const removeBook = function () {};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { title, author, status, pages } = e.target.elements;

  const book = new Book(title.value, author.value, pages.value, status.checked);
  addBookToLibrary(book);
  document.querySelector(".modal-wrapper").style.display = "none";
  form.reset();
});
