const express = require('express');
const router = express.Router();

const personController = require('../app/controllers/PersonController');

router.use('/:slug', personController.show);
router.use('/', personController.index);


module.exports = router;