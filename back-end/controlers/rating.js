const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const { id } = req.params;
        const { username } = req.headers;
        models.Rating.find({ movie: id, username })
            .then((rating) => res.send(rating))
            .catch(next)
    },
    post: (req, res, next) => {
        const { rating, movieId, username } = req.body;
        models.Rating.findOneAndUpdate(movieId, { rating, movie: movieId, username }, {upsert: true})
            .then((ratingObj) => {
                const { rating } = ratingObj
                res.send({ rating })
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