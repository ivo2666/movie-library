const { models } = require('mongoose');
const fetch = require('node-fetch');
const config = require('../config/config.js');
//const models = require('../models');

module.exports = {
    get: {
        all: (req, res, next) => {
            //const fetchUrl = `${config.api}${req}${req.headers.queries}`

            fetch(`${config.api}?q=${req.query.q}`)
                .then(async response => {
                    const body = await response.json();
                    console.log(body)
                    res.send(body);

                })
                .catch(next)
            //models.User.find({ user })
            //    .then((users) => res.send(users))
            //    .catch(next)
        },//

        one: (req, res, next) => {
            const { id } = req.params;
            fetch(`http://api.tvmaze.com/shows/${id}`)
            .then(async response => {
                const body = await response.json();
                res.send(body);
            })
            .catch(next)
        }
    },

    post: {
        addToFav: (req, res, next) => {
            const { id, user } = req.body;

            models.User.findOneAndUpdate({ _id: user },
                { $push: { favorites: id } },
                function (error, success) {
                    if (error) {
                        console.log(error);
                        next(error);
                    } else {
                        console.log(success);
                    }
                })
            .then(user => res.sendStatus(200))
            .catch(next)
    },

    removeFromFav(req, res, next) {
        const { id, user } = req.body;

        models.User.findOneAndUpdate({ _id: user },
            { $pull: { favorites: id } },
            function (error, success) {
                if (error) {
                    console.log(error);
                    next(error);
                } else {
                    console.log(success);
                }
            })
        .then(user => res.sendStatus(200))
        .catch(next)
    }
}

    //  
};