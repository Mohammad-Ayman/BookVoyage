// GLobal variables
const bookList = document.getElementById("movie-list");
const getBooksEl = document.getElementById("fetch-books");
let books = [
  // {
  //   id: "1",
  //   title: "A Light in the Attic",
  //   imageUrl:
  //     "http://books.toscrape.com/media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg",
  //   price: "$51.77",
  // },
  // {
  //   id: "2",
  //   title: "Tipping the Velvet",
  //   imageUrl:
  //     "http://books.toscrape.com/media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg",
  //   price: "$53.74",
  // },
  // {
  //   id: "3",
  //   title: "Soumission",
  //   imageUrl:
  //     "http://books.toscrape.com/media/cache/3e/ef/3eef99c9d9adef34639f510662022830.jpg",
  //   price: "$50.10",
  // },
];
//
const getBooks = async () => {
  try {
    const res = await fetch("./new_dbFor372.json", {
      method: "GET",
    });
    console.log(res);
    const data = await res.json();
    console.log("Fetched Data: ", data);
    books = [...data];
    console.log(books);
    // console.log(`books: ${books}`);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const renderUi = (title, image, price) => {
  const newBook = document.createElement("li");
  newBook.classList.add("movie-element");
  newBook.innerHTML = `<div class="movie-element__image">
    <img
      src=${image}
      alt=${title}
    />
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>Price: $${price}</p>
  </div>`;
  bookList.append(newBook);
};
const updateUi = async () => {
  await getBooks();
  books.forEach((book) => {
    const { titles, imageUrl, price } = book;
    // let title = book.title;
    // let image = book.imageUrl;
    // let price = book.price;
    renderUi(titles, imageUrl, price);
  });
};

// getBooksEl.addEventListener("click", updateUi);
updateUi();
