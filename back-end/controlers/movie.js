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
        }//
    },

    post: {

    }

    //  
};