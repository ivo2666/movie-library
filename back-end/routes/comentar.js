const express = require('express');
const router = express.Router();
const controllers = require('../controlers')

router.get('/:id', controllers.comentar.get);

router.put('/:id', controllers.comentar.put);

router.post('/', controllers.comentar.post);

router.delete('/remove/:id', controllers.comentar.delete);

module.exports = router;
