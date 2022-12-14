//import dependecies
const mongoose = require('./connection')

// Define Model
//pull schema and model from mongoose
const { Schema, model } = mongoose 

//make user schema 
const userSchema = new Schema({
    username: {type: String, required: true, unique: true}, 
    passowrd: {type: String, required: true}
})

//make user model 
const User = model('User', userSchema)

module.exports = User  