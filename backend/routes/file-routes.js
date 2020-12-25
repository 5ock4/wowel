const express = require('express');
const bodyParser = require('body-parser');
const db = require('../mongoose');
const xlsx = require('xlsx');
const utf8 = require('utf8')
const fs = require('fs');

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

router.use(bodyParser.json());

router.get("/api", (req, res, next) => {
  res.send({ express : 'api'});
});

router.post("/api", (req, res) => {

  console.log('Post in progress...')

  let workbook = xlsx.read(req.body.text, {type: 'binary'})
  console.log(workbook.Sheets.List1.A1)

  db.createWord(workbook.Sheets.List1.A1.v)
  res.send({status: 'OK'})
});

module.exports = router;