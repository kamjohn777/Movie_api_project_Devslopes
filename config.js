// fetch('http://localhost:3000/api')
//     .then(response => response.json())
//     .then(data => {
//         // Do something with the data
//         console.log(data);
//     })
//     .catch(err => console.error(err));

fetch('http://localhost:3000/api/movies')
    .then(response => response.json())
    .then(data => {
        const moviesContainer = document.getElementById('movies-container');

        // Loop through the movies and create a div for each one
        data.results.forEach(movie => {
            const movieDiv = document.createElement('div');

            // Create an img element for the movie poster
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            movieDiv.appendChild(img);

            // Create a p element for the movie title
            const title = document.createElement('p');
            title.textContent = movie.title;
            movieDiv.appendChild(title);

            // Create a p element for the movie description
            const description = document.createElement('p');
            description.textContent = movie.overview;
            movieDiv.appendChild(description);

            // Add the movie div to the movies container
            moviesContainer.appendChild(movieDiv);
        });
    })
    .catch(err => console.error(err));