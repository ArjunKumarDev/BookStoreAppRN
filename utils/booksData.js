import { images } from "../constants";

export const bookOtherWordsForHome = {
  id: 1,
  bookName: "Game of thrones",
  bookCover: images.gameofThrones,
  rating: 4.5,
  language: "Eng",
  pageNo: 341,
  author: "George R. R. Martin",
  genre: ["Romance", "Adventure", "Drama"],
  readed: "12k",
  description:
    "In the Game of Thrones, you either win or you die. In the mythical continent of Westeros, nine families of higher nobility (Targaryen, Lannisters, Starks, Tyrell, Martell, Greyjoys, Baratheons and Boltons) scramble bitterly to gain power over the seven kingdoms and the Iron throne.",
  backgroundColor: "rgba(240,240,232,0.9)",
  navTintColor: "#000",
};

export const bookTheMetropolis = {
  id: 2,
  bookName: "HarryPotter",
  bookCover: images.harrypotter,
  rating: 4.1,
  language: "Eng",
  pageNo: 272,
  author: "J.K.Rowling",
  genre: ["Adventure", "Drama"],
  readed: "13k",
  description:
    "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
  backgroundColor: "rgba(247,239,219,0.9)",
  navTintColor: "#000",
};

export const bookTheTinyDragon = {
  id: 3,
  bookName: "The Tiny Dragon",
  bookCover: images.theTinyDragon,
  rating: 3.5,
  language: "Eng",
  pageNo: 110,
  author: "Ana C Bouvier",
  genre: ["Drama", "Adventure", "Romance"],
  readed: "13k",
  description:
    "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
  backgroundColor: "rgba(119,77,143,0.9)",
  navTintColor: "#FFF",
};

export const myBooksData = [
  {
    ...bookOtherWordsForHome,
    completion: "75%",
    lastRead: "3d 5h",
  },
  {
    ...bookTheMetropolis,
    completion: "23%",
    lastRead: "10d 5h",
  },
  {
    ...bookTheTinyDragon,
    completion: "10%",
    lastRead: "1d 2h",
  },
];
