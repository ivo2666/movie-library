const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const { id } = req.params;
        const { username } = req.headers;
        models.Comentar.find({movie: id, username})
            .then((comentars) => res.send(comentars))
            .catch(next)
    },
    put: (req, res, next) => {
        const id = req.params.id;
        const update = req.body;
        models.Comentar.updateOne({ _id: id },  update )
            .then((comentarObj) => {
                const { comentar } = comentarObj;
                res.send(comentar)
            }).catch(next)
    },
    post: (req, res, next) => {
        const { comentar, movieId, username } = req.body;
        models.Comentar.create({ comentar, movie: movieId, username })
            .then((comentarObj) => {
                const { comentar } = comentarObj;
                res.send(comentar)
            })
            .catch((err) => {
                console.log(err)
                next(err)
            })
    },
    delete: (req, res, next) => {
        const { id } = req.params;
        models.Comentar.deleteOne({ _id: id })
            .then((removed) => {
                return res.send(removed)
            })
            .catch(next)
    }
}