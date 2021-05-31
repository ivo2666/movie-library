const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const movieSchema = new Schema({

    id: {
        type: ObjectId,
        required: true
    },

    rating: Schema.Types.Mixed,

    users: [{ type: ObjectId, ref: "users" }],

    notes: [{type:String}]

});


module.exports = new Model('Movie', movieSchema);