const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number } = Schema.Types;


const comentarSchema = new Schema({

    comentar: {
        type: String,
    },

    username: {
        type: String,
    },

    movie: {
        type: Number,
    }



});



module.exports = new Model('Comentar', comentarSchema);