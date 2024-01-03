const movies = require("./movies");
const tvShows = require("./tvShows");

const directors = [
    { 
        id: 1,
        name: 'Francis Lawrence', 
        filmography: [
            movies[1]
        ] 
    },
    { 
        id: 2, 
        name: 'Joss Whedon', 
        filmography: [
            movies[2]
        ] 
    },
    { 
        id: 3, 
        name: 'Frank Darabount', 
        filmography: [
            tvShows[1]
        ] 
    },
  ];

  module.exports = directors;