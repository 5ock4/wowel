const express = require('express');
const phrasesControllers = require('../controllers/phrases-controllers');

const router = express.Router();

router.get("/api", phrasesControllers.getPhrases);

router.post("/api", phrasesControllers.createPhrases);

module.exports = router;