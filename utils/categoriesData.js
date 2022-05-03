import {
  bookOtherWordsForHome,
  bookTheMetropolis,
  bookTheTinyDragon,
} from "./booksData";

export const categoriesData = [
  {
    id: 1,
    categoryName: "Best Seller",
    books: [bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon],
  },
  {
    id: 2,
    categoryName: "The Latest",
    books: [bookTheMetropolis],
  },
  {
    id: 3,
    categoryName: "Coming Soon",
    books: [bookTheTinyDragon],
  },
];
