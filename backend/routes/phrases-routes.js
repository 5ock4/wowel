const express = require('express');
const phrasesControllers = require('../controllers/phrases-controllers');

const router = express.Router();

router.get("/api", (req, res, next) => {
  res.send({ express : 'api'});
});

router.post("/api", phrasesControllers.createPhrases);

module.exports = router;