// GLobal variables
const bookList = document.getElementById("movie-list") as HTMLElement;
const getBooksEl = document.getElementById("fetch-books") as HTMLElement;
let titles: string[] = [];
let images: string[] = [];
let prices: string[] = [];
let books: object[] = [
  {
    id: "1",
    title: "A Light in the Attic",
    imageUrl:
      "http://books.toscrape.com/media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg",
    price: "$51.77",
  },
  {
    id: "2",
    title: "Tipping the Velvet",
    imageUrl:
      "http://books.toscrape.com/media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg",
    price: "$53.74",
  },
  {
    id: "3",
    title: "Soumission",
    imageUrl:
      "http://books.toscrape.com/media/cache/3e/ef/3eef99c9d9adef34639f510662022830.jpg",
    price: "$50.10",
  },
];
//
const getBooks = async () => {
  try {
    const res = await fetch("dbFor372.json", {
      method: "GET",
    });
    console.log(res);
    const data = await res.json();
    console.log("Fetched Data: ", data);
    titles = [data.titles];
    images = [data.imageUrl];
    prices = [data.price];
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const renderUi = (title: string, image: string, price: string) => {
  const newBook = document.createElement("li") as HTMLElement;
  newBook.classList.add("movie-element");
  newBook.innerHTML = `<div class="movie-element__image">
    <img
      src=${image}
      alt=${title}
    />
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${price}</p>
  </div>`;
  bookList?.append(newBook);
};
const updateUi = () => {
  books.forEach((book) => {
    // const { title, imageUrl, price } = book;
    let title = book.title;
    let image = book.imageUrl;
    let price = book.price;
    renderUi(title, imageUrl, price);
  });
};

// getBooksEl.addEventListener("click", getBooks);
updateUi();
