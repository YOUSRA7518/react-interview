const movies = [
  {
    id: "1",
    title: "BabySitting ",
    category: "Comedie",
    likes: 4,
    dislikes: 1
  },
  {
    id: "2",
    title: "Qu'est-ce qu'on a fait au BON DIEU?",
    category: "Comedie",
    likes: 2,
    dislikes: 0
  },
  {
    id: "3",
    title: "Vice-Versa",
    category: "Animation",
    likes: 3,
    dislikes: 1
  },
  {
    id: "4",
    title: "The Conjuring",
    category: "Horreur",
    likes: 6,
    dislikes: 6
  },
  {
    id: "5",
    title: "Joker",
    category: "Drame",
    likes: 16,
    dislikes: 2
  },
  {
    id: "6",
    title: "Sinister",
    category: "Horreur",
    likes: 11,
    dislikes: 3
  },
  {
    id: "7",
    title: "Esther",
    category: "Horreur",
    likes: 12333,
    dislikes: 32
  },
  {
    id: "8",
    title: "Anabelle",
    category: "Horreur",
    likes: 2,
    dislikes: 1
  },
  {
    id: "9",
    title: "Undfriended",
    category: "Horreur",
    likes: 2,
    dislikes: 1
  },
  {
    id: "10",
    title: "US",
    category: "Horreur",
    likes: 22,
    dislikes: 12
  }
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
