const express = require('express');
const router = express.Router();
const controllers = require('../controlers')

router.get('/:id', controllers.rating.get);

router.put('/:id', controllers.rating.put);

router.post('/', controllers.rating.post);

router.delete('/remove/:id', controllers.rating.delete);

module.exports = router;
