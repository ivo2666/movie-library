const express = require('express');
const router = express.Router();
const controllers = require('../controlers')

router.get('/:username', controllers.user.get);

router.get('/', controllers.user.getAll);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.post('/verify', controllers.user.post.verify);

module.exports = router;
