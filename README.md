# Movie and TV Show Backend

This is a backend server for a movie and TV show database application. It provides RESTful APIs for managing movies, TV shows, actors, directors, and user authentication.

## Installation

1. Clone this repository to your local machine:

   ```bash
    git clone https://github.com/AbelMachaca/peliculas-backend.git
   ```
2. Install the required dependencies: 

    ```bash
    npm install
    ```
3. Start the server:

    ```
    npm run dev
    ```    
The server will start on http://localhost:3000

# API Endpoints

## Authentication
To use this backend service, you need to register at least once through the login form in your web browser to obtain the access token and refresh token.

* GET: Display the login form.
    ```
    /login
    ```

Can now use the routes, I used the REST Client of the Visual Studio Code extension.
**In the REST Client folder, there are examples of how to apply them by replacing the content** of the Authorization with the access token obtained or by placing your refresh token in the **post_refresh_token** to obtain the access token without having to register.

* POST: Refresh the access token using a refresh token. 

    ```
    /token
    ```   

## Movies
* GET: Get a list of movies with optional filtering and sorting.

    ```
    /api/movies
    ```
* POST: Create a new movie.

    ```
    /api/create/movie
    ```
## TV Shows
* GET: Get information about a specific TV show episode.

    ```
    /api/tvshows/1/seasons/1/episodes/1
    ```



## Authors
[Abel Machaca](https://www.linkedin.com/in/abelmachaca/)
