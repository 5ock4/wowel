const express = require('express');
const phrasesControllers = require('../controllers/phrases-controllers');
const xlsx = require('xlsx');

const router = express.Router();

router.get("/api", (req, res, next) => {
  res.send({ express : 'api'});
});

router.post("/api", (req, res) => {

  console.log('Post in progress...')

  let workbook = xlsx.read(req.body.text, {type: 'binary'})
  console.log(workbook.Sheets.List1.A1)

  phrasesControllers.createPhrase(workbook.Sheets.List1.A1.v)
  res.send({status: 'OK'})
});

module.exports = router;