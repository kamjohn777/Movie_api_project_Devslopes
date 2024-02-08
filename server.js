// require('dotenv').config();
// const express = require('express');
// const fetch = require('node-fetch');
// const app = express();
// const port = 3000;

// app.get('/api', async (req, res) => {
//     const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`);
//     const data = await response.json();

//     res.json(data);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });





// const cors = require('cors');

// app.use(cors());

// require('dotenv').config();
// const express = require('express');
// const fetch = require('node-fetch');
// const app = express();
// const port = 3000;

// app.get('/api', async (req, res) => {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer ' + process.env.AUTH_TOKEN
//         }
//     };

//     const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
//     const data = await response.json();

//     res.json(data);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello, world This is the api call!' });

})

app.get('/api/movies', async (req, res) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`);
    const data = await response.json();

    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});