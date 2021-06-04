const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        const {username} = req.params;
        models.User.find({username})
            .then((users) => res.send(users))
            .catch(next)
    },

    getAll: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { username, password, favorites } = req.body;
            models.User.create({ username, password, favorites })
                .then((user) => {
                  const token = utils.jwt.createToken({ id: user._id });
                  const {username, _id, favorites} = user;
                    res.header("Authorization", token).send({username, _id, favorites});
                })
                .catch((err) => {
                    if (err.code === 11000) {
                        res.sendStatus(302);
                    }else {
                        console.log(err)
                    }
                  
                })
        },
        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(200).send({message: "Invalid password"});
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id }, '010203', { expiresIn: '999999h'});
                    const {username, _id, favorites} = user;
                    res.header("Authorization", token).send({username, _id, favorites});
                })
                .catch(err => {
                    if (err.message === "Cannot read property 'matchPassword' of null") {
                        res.status(200).send({message: 'Invalid username'});
                    }else if (err.message === err.message.includes('connection <monitor> to timed out')) {
                        res.status(200).send({message: 'Invalid username'});
                    }else {
                        next(err)
                    }
                    
                });
        },

        verify: (req, res, next) => {
            const token = req.headers.authorization || '';
  
            Promise.all([
                utils.jwt.verifyToken(token),
                models.TokenBlacklist.findOne({ token })
            ])
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }
  
                    models.User.findById(data.id)
                        .then((user) => {
                            const {username, _id, favorites} = user;
                            return res.send(
                                {username, _id, favorites}
                              )
                        });
                })
                .catch(err => {
                    if (['jwt expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send(err.message);
                        return;
                    }
  
                    res.send({
                      status: false
                    })
                    next(err)
                })
          },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    }

  //  
};