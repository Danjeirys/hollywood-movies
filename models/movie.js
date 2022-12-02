const mongoose = require('./connection')

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model} = mongoose

// make movie schema
const movieSchema = new Schema({
    title : {type: String, required: true},
    releaseDate: String,
    length: Number,
    genre: String,
    poster: {type:String, required: true},
    director: {type:String, required: true},
    rating: String,
    watchAgain: Boolean,
    cast: [{type: String}]
});

// make fruit model
const Movie = model("movie", movieSchema)

module.exports = Movie 