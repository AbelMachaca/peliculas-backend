const actorsData = require('../models/actors');
const directors = require('../models/directors');

const movies = require('../models/movies');

exports.getAllMovies = (req, res) => {
    let result = movies;
  
    // Filtering by genre
    const genre = req.query.genre;
    if (genre) {
      result = result.filter(movie => movie.genre === genre);
    }
  
    // Sorting by title
    const sortBy = req.query.sortBy;
    if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }


  result = result.map(movie => ({
    ...movie,
    director: movie.director.map(directorId => {
      let director = directors.find(d => d.id === directorId);
      return director ? director.name : "Unknown Director";
    }),
    actors: movie.actors.map(actorId => {
      let actor = actorsData.find(a => a.id === actorId);
      return actor ? actor.name : "Unknown Actor";
    })
  }));
  
  
    res.json(result);
};

exports.createMovie = (req, res) => {
      // Retrieve data from the form or request body
      const { title, genre, director, actors } = req.body;

      // Create a new movie object with the received data
      const newMovie = {
        id: movies.length + 1,
        title,
        genre,
        director: [],
        actors: [],
      };
    
      director.forEach(directorInput => {
        // Try to find an existing director by ID or name
        const existingDirector = directors.find(d => {
          return (d.id === directorInput || d.name === directorInput);
        });
    
        if (existingDirector) {
          // If an existing director is found, add their ID to the movie
          newMovie.director.push(existingDirector.id);
        } else {
          // If no existing director is found, create a new one
          const newDirector = {
            id: directors.length + 1,
            name: directorInput,
            filmography: [],
          };
          directors.push(newDirector);
          newMovie.director.push(newDirector.id);
        }
      });
    
    
      // Check if the actor already exists in the database and add or link them
      actors.forEach(actorInput => {
        const existingActor = actorsData.find(a => {
          return (a.id === actorInput || a.name === actorInput);
        });
    
        if (existingActor) {
          newMovie.actors.push(existingActor.id);
        } else {
          const newActor = {
            id: actorsData.length + 1,
            name: actorInput,
          };
          actorsData.push(newActor);
          newMovie.actors.push(newActor.id);
        }
      });
      
        movies.push(newMovie);
      
        res.json({ message: 'Movie created successfully', movie: newMovie });
};