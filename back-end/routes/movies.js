const express = require('express');
const router = express.Router();
const controllers = require('../controlers')

router.get('/', controllers.movie.get.all);


module.exports = router;