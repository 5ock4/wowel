const express = require('express');
const bodyParser = require('body-parser');
const db = require('../mongoose');

const router = express.Router();

router.use(bodyParser.json());

router.get('/', db.getWord);

router.post('/', db.createWord);

module.exports = router;