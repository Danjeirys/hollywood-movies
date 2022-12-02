const mongoose = require('./connection')
const Movie = require('./movie')

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection;

// Make sure code is not run till connected
db.on("open", () => {
  ///////////////////////////////////////////////
  // Write your Seed Code Below
  //////////////////////////////////////////////
const startMovies = [
    {
        title: 'Matrix',
        releaseDate: '1999',
        length: 136,
        genre: 'Sci-Fi',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25XsrKIxCweG7Ja6ZeUrdH5_6x1prTvCekA&usqp=CAU',
        director: 'Lana, Lily Wasoki',
        rating: 'R',
        watchAgain: true,
        cast: ['Keanu Reeves', 'Laurence Fishburne']
    },
    {
        title: '50 First Dates',
        releaseDate: '2004',
        length: 99,
        genre: 'Comedy',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgCFp3pv4d7AeHUPkH4cbwFCLi6PrfvgoXQ&usqp=CAU',
        director: 'Peter Segal',
        rating: 'PG-13',
        watchAgain: true,
        cast: ['Adam Sandler', 'Drew Barrymore', 'Rob Schneider']
    },
    {
        title: 'The Dark Knight',
        releaseDate: '2008',
        length: 152,
        genre: 'Superhero',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0UXWYnTydbXwgYFZGNLvKYZ9AMu0K5ZQlQ&usqp=CAU',
        director: 'Christopher Nolan',
        rating: 'PG-13',
        watchAgain: true,
        cast: ['Christian Bale', 'Heath Ledger', 'Aaron Echhart']
    }
]
 // Delete all fruits
Movie.deleteMany({}).then((data) => {
        // Seed Starter Fruits
        Movie.create(startMovies).then((data) => {
        // send created fruits as response to confirm creation
        // res.json(data)
        console.log('data', data)
        db.close()
    })
    .catch((err) => {
        console.log(err)
        db.close()
    })
})
})