const express = require('express');
const router = express.Router();
const controllers = require('../controlers')

router.get('/', controllers.movie.get.all);

router.get('/:id', controllers.movie.get.one);

router.post('/addToFav', controllers.movie.post.addToFav);

router.post('/removeFromFav', controllers.movie.post.removeFromFav);


module.exports = router;