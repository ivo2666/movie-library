const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number } = Schema.Types;


const ratingSchema = new Schema({

    rating: {
        type: Number,
        uniq: true
    },

    username: {
        type: String,
    },

    movie: {
        type: Number,
    }






});



module.exports = new Model('Rating', ratingSchema);