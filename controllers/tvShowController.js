const tvShows = require('../models/tvShows');
const directors = require('../models/directors');
const actorsData = require('../models/actors');

// Function to retrieve information about a specific episode
exports.getEpisodeInfo = (req, res) => {
  const tvShowId = parseInt(req.params.tvShowId);
  const seasonNumber = parseInt(req.params.seasonNumber);
  const episodeNumber = parseInt(req.params.episodeNumber);

  const tvShow = tvShows.find(show => show.id === tvShowId);
  if (!tvShow) {
    return res.status(404).json({ message: 'TV show not found' });
  }

  const season = tvShow.seasons.find(s => s.seasonNumber === seasonNumber);
  if (!season) {
    return res.status(404).json({ message: 'Season not found' });
  }

  const episode = season.episodes.find(e => e.episodeNumber === episodeNumber);
  if (!episode) {
    return res.status(404).json({ message: 'Episode not found' });
}

  const episodeWithDirectors = {
    ...episode,
    director: episode.director.map(directorId => {
      const director = directors.find(d => d.id === directorId);
      return director ? director.name : "Unknown Director";
    }),
    actors: episode.actors.map(actorId => {
      const actor = actorsData.find(a => a.id === actorId);
      return actor ? actor.name : "Unknown Actor";
    })
  };

  res.json(episodeWithDirectors);
};
