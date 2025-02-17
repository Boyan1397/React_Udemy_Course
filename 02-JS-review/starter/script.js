const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: false,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();

// destructuring
/*
const book = getBook(3);
const { author, title, genres, pages, publicationDate, hasMovieAdaptation } =
  book;

console.log(title);
console.log(author);

const [first, ...others] = genres;
console.log(first);
console.log(others);

let newGenres = [...genres, "your grandmas umbrella"];
console.log(newGenres);

// we can update and create new properties while the obj is spreaded !

let newBook = {
  ...book,
  // We can change existing data with the spread
  title: "Goat Movie",
  author: "Boyan",
  // we can add new data
  newdata: "HAHAHAH",
};

// TERNARY
let pageRange =
  pages > 200 ? "Pages are more than 200" : "pages are less than 200";

// Simple arrow function
let getYear = (someString) => someString.split("-")[0];
console.log(getYear(publicationDate));

//Circuiting
// && operator
// if its true it returns the message if not it returns false
let exampleCrcuiting = true && "its true";
let exampleCrcuiting2 = false && "nothing";
let hasAdaptation = hasMovieAdaptation && "yes it has";
console.log(hasAdaptation);

// || operator
// if its false it returns message else it returns true
let hasMovieAdaptation2 = false || "example doesnt have ";
console.log(hasMovieAdaptation2);

//Optional chaining
function getAllReviews(book) {
  let goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  let librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getAllReviews(book))
*/
// MAPPING
const numbers = [1, 2, 3, 4, 5];
let mappedNums = numbers.map((el) => el * 2);
console.log(mappedNums);

const titles = books.map((book) => book.title);
console.log(titles);

function getAllReviews(book) {
  let goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  let librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const esentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviews: getAllReviews(book),
}));

// FILTER
const longBooksWithAdaptation = books
  .filter((book) => book.pages >= 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithAdaptation);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

// REDUCE
const allPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log(allPages);

//SORT
let someNums = [3, 14, 1, 6, 8];
let sortedArr = someNums.slice().sort((a, b) => a - b);
console.log(sortedArr);

const sortedBooks = books.slice().sort((a, b) => a.pages - b.pages);

// IMMUTABLE ARRAYS !!!
// ADDING
let newBook = {
  id: 7,
  title: "The Godfather",
  pages: 4444,
  genres: ["drama", "action"],
};

const addedBook = [...books, newBook];
// DELETING
const deletedBook = addedBook.filter((book) => book.id !== 3);

// UPDATING !!!!
const updatedBooks = deletedBook.map((book) =>
  book.id === 1 ? { ...book, title: "Lord of Pizzas" } : book
);

for (el of updatedBooks) {
  console.log(el);
}

// Promises
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Async await

let someLink = "https://jsonplaceholder.typicode.com/todos/1";

async function getData(link) {
  let response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network error try again");
  }

  let data = await response.json();

  console.log(data);
}

getData(someLink);
