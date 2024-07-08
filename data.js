const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: "8.8",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    fullDescription: "A mind-bending thriller...",
    videoUrl: "https://www.youtube.com/embed/51EN2VrdpAo?si=i2JBFuPQCI2Vk19S",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    rating: "9.0",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f4/%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C_%282008%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/400px-%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C_%282008%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    fullDescription: "A dark and gripping tale...",
    videoUrl: "https://youtu.be/xGcfBRkJSWQ?si=J2X1kmzUGMaDaFNd",
  },
  {
    id: 3,
    title: "Titanic",
    genre: "Romance",
    rating: "7.8",
    image: "https://i3.wp.com/b1.filmpro.ru/c/15564.jpg",
    fullDescription: "A tragic love story...",
    videoUrl: "https://www.youtube.com/embed/51EN2VrdpAo?si=i2JBFuPQCI2Vk19S",
  },
  {
    id: 4,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: "8.6",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MzctNzRmNC00ZjUxLWJhNzEtYzY2N2JjNTViMzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    fullDescription:
      "A team of explorers travel through a wormhole in space...",
    videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 5,
    title: "The Avengers",
    genre: "Action",
    rating: "8.0",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTk0NTM4NjMzMF5BMl5BanBnXkFtZTcwODgwNzkzOQ@@._V1_.jpg",
    fullDescription: "Earth's mightiest heroes must come together...",
    videoUrl: "https://www.youtube.com/embed/eOrNdBpGMv8",
  },
  {
    id: 6,
    title: "The Hangover",
    genre: "Comedy",
    rating: "7.7",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjEzNTU4MzEyN15BMl5BanBnXkFtZTcwNjk4MDk0Mg@@._V1_.jpg",
    fullDescription: "Three buddies wake up from a bachelor party...",
    videoUrl: "https://www.youtube.com/embed/tcdUhdOlz9M",
  },
  {
    id: 7,
    title: "Step Brothers",
    genre: "Comedy",
    rating: "6.9",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTUxNzE2NzY5OF5BMl5BanBnXkFtZTcwMzQ4MTk2Mw@@._V1_.jpg",
    fullDescription: "Two aimless middle-aged losers still living at home...",
    videoUrl: "https://www.youtube.com/embed/CewglxElBK0",
  },
  {
    id: 8,
    title: "Forrest Gump",
    genre: "Drama",
    rating: "8.8",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTYwOTk4Njk2Nl5BMl5BanBnXkFtZTcwNTYyMjM3Mw@@._V1_.jpg",
    fullDescription:
      "The presidencies of Kennedy and Johnson, the Vietnam War...",
    videoUrl: "https://www.youtube.com/embed/bLvqoHBptjg",
  },
  {
    id: 9,
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: "9.3",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZGE1LWJmYzUtN2JhZjNhYjQzYjNiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
    fullDescription: "Two imprisoned men bond over a number of years...",
    videoUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
  },
  {
    id: 10,
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    rating: "7.6",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA2NjY3NzExNV5BMl5BanBnXkFtZTYwMzY4Njk4._V1_.jpg",
    fullDescription: "An orphaned boy enrolls in a school of wizardry...",
    videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
  },
  {
    id: 11,
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Horror",
    rating: "7.6",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA2NjY3NzExNV5BMl5BanBnXkFtZTYwMzY4Njk4._V1_.jpg",
    fullDescription: "An orphaned boy enrolls in a school of wizardry...",
    videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
  },
  {
    id: 11,
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Thriller",
    rating: "7.6",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA2NjY3NzExNV5BMl5BanBnXkFtZTYwMzY4Njk4._V1_.jpg",
    fullDescription: "An orphaned boy enrolls in a school of wizardry...",
    videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
  },
];
