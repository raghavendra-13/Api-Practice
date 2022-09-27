const express = require('express');

const app = express();
const port = 3000;

//parse json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let movies = [
    {
        id: "1",
        title: "incept",
        director: "Christopher Nol",
        release_date: "2012-07-06",
    },
    {
        id: "2",
        title: "inpt",
        director: "Christ",
        release_date: "2012-07-26",
    },
]

//get the movie list
app.get('/movie', (req,res) => {
    res.json(movies)
})


//add movie
app.post('/movie', (req,res) => {
    const movie = req.body

    console.log(movie);
    movies.push(movie)
    res.send("Movie is added to the list....!")
})

//search movie
app.get('/movie/:id', (req,res) => {
    const id = req.params.id;

    for (let movie of movies) {
        if (movie.id === id) {
            res.json(movie)
            return
        }

    }
    res.status(404).send('Movie not found');
})

//delete movie
app.delete('/movie/:id', (req,res) => {
    const id = req.params.id
    movies = movies.filter(movie => {
        if (movie.id !== id) {
            return true
        }
        return false
    })
    res.send('Movie is deleted...!');
})



//start port
app.listen(port, () => console.log(`Server listening at port ${port}`));