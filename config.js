// fetch('http://localhost:3000/api/movies')
//     .then(response => response.json())
//     .then(data => {
//         const moviesContainer = document.getElementById('movies-container');
//         // moviesContainer.style.width = '300px';
//         moviesContainer.style.display = 'grid';
// moviesContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
// moviesContainer.style.gridGap = '10px';
// moviesContainer.style.width = '100%';

//         // Loop through the movies and create a div for each one
//         data.results.forEach(movie => {
//             const movieDiv = document.createElement('div');
//             movieDiv.style.border = '300px';
//             movieDiv.style.display = 'flex';
//             movieDiv.style.flexDirection = 'column';
//             movieDiv.style.alignItems = 'center';

//             // Create an img element for the movie poster
//             if (movie.poster_path) {
//                 const img = document.createElement('img');
//                 const imageUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
//                 console.log(imageUrl); // Log the image URL
//                 img.src = imageUrl;
//                 movieDiv.appendChild(img);
//             }

//             // Create a p element for the movie title
//             const title = document.createElement('p');
//             title.textContent = movie.title;
//             movieDiv.appendChild(title);

//             // Create a p element for the movie description
//             const description = document.createElement('p');
//             description.style.width = '200px';
//             description.textContent = movie.overview;
//             movieDiv.appendChild(description);

//             // Add the movie div to the movies container
//             moviesContainer.appendChild(movieDiv);
//         });
//     })
//     .catch(err => console.error(err));

//  data variable
let data;

// Favorites array
let favorites = [];


// Movies container
const moviesContainer = document.getElementById('movies-container');

// Function to add to favorites
function addToFavorites(movie) {
    const index = data.results.indexOf(movie);
    if (index !== -1) {
        data.results.splice(index, 1);
        favorites.push(movie);
    }
    renderMovies();
    console.log(favorites);
}

// Function to remove from favorites
function removeFromFavorites(movie) {
    const index = favorites.indexOf(movie);
    if (index !== -1) {
        favorites.splice(index, 1);
        data.results.push(movie);
    }
    renderMovies();
}

// Function to render movies
function renderMovies() {
    // Clear the movies container
    moviesContainer.innerHTML = '';

    // Render the movies
    data.results.forEach(movie => {
        // Create the movie div and add styles
        const movieDiv = document.createElement('div');
        

        // Create the img element for the movie poster
        if (movie.poster_path) {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
            movieDiv.appendChild(img);
        }

        // Create the p element for the movie title
        const title = document.createElement('p');
        title.textContent = movie.title;
        movieDiv.appendChild(title);

        // Create the p element for the movie description
        const description = document.createElement('p');
        description.textContent = movie.overview;
        movieDiv.appendChild(description);

        // Create the button to add to favorites
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Favorites';
        addButton.addEventListener('click', () => addToFavorites(movie));
        movieDiv.appendChild(addButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Favorites';
        removeButton.addEventListener('click', () => removeFromFavorites(movie));
        movieDiv.appendChild(removeButton);

        // Add the movie div to the movies container
        moviesContainer.appendChild(movieDiv);
    });

    // Render the favorites

    
    const favoritesDiv = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = 'Favorites';
    favoritesDiv.appendChild(h2);
    
    favorites.forEach(movie => {

    //     const favoritesDiv = document.getElementById('favorites-container')
    //    const h2 = document.createElement('h2');
    //    h2.textContent = 'Favorites';
    //    favoritesDiv.appendChild(h2);


        // Create the img element for the movie poster
        if (movie.poster_path) {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
            favoritesDiv.appendChild(img);
        }

        // Create the p element for the movie title
        const title = document.createElement('p');
        title.textContent = movie.title;
        favoritesDiv.appendChild(title);

        // Create the p element for the movie description
        const description = document.createElement('p');
        description.textContent = movie.overview;
        favoritesDiv.appendChild(description);

        // Create the button to remove from favorites
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Favorites';
        removeButton.addEventListener('click', () => removeFromFavorites(movie));
        favoritesDiv.appendChild(removeButton);

        // Add the movie div to the movies container
        moviesContainer.appendChild(favoritesDiv);
    });
}

// Fetch the movies
fetch('http://localhost:3000/api/movies')
    .then(response => response.json())
    .then(fetchedData => {
        // Assign the fetched data to the global data variable
        data = fetchedData;
        renderMovies();
    })
    .catch(err => console.error(err));