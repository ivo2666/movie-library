const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const { id } = req.params;
        const { username } = req.params;
        models.Rating.find({ movie: id, username })
            .then((rating) => res.send(rating))
            .catch(next)
    },
    put: (req, res, next) => {
        const id = req.params.id;
        const update = req.body;
        models.Rating.updateOne({ _id: id },  update )
            .then((updatedRating) => res.send(updatedRating))
            .catch(next)
    },
    post: (req, res, next) => {
        const { rating, movieId, username } = req.body;
        models.Rating.create({ rating, movie: movieId, username })
            .then((rating) => {
                res.send(rating)
            })
            .catch((err) => {
                console.log(err)
                next(err)
            })
    },
    delete: (req, res, next) => {
        const { id } = req.params;
        models.Rating.deleteOne({ _id: id })
            .then((removed) => {
                return res.send(removed)
            })
            .catch(next)
    }


};