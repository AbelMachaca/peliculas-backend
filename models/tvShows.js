const tvShows = [
    {
      id: 1,
      title: 'The Walking Dead',
      director: [3],
      seasons: [
        {
          seasonNumber: 1,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Days Gone Bye',
              description: 'Police officer Rick Grimes wakes up in the hospital, where he has been admitted for several months after getting shot during a shootout with some fugitives. The state of neglect in his room indicates that the nurses stopped attending to it a long time ago.',
              director: [3],
              actors: [1, 2]
            },
            { 
                episodeNumber: 2, 
                title: 'Guts', 
                description: 'In the second episode of the first season of "The Walking Dead," the group of survivors faces challenges on their way to Atlanta, including the threat of walkers and internal tensions within the group. The search for a safe refuge continues.',
                director: [3], 
                actors: [3] 
            },
          ]
        }
      ]
    },
  ];
  
  
  module.exports = tvShows;