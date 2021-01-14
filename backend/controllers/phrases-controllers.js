const mongoose = require("mongoose");
const parser = require("../utils/parsers")
const xlsx = require('xlsx');

const Phrase = require("../models/phrase");

const createPhrases = async (req, res, next) => {
  
  let workbook = xlsx.read(req.body.text, {type: 'binary'});
  
  let phrasesMap = parser.XlsxDataParser(workbook);
  
  const createdPhrase = new Phrase({
    phrase: phrase,
    type: 'tst'
  });
  console.log(createdPhrase);
  const result = await createdPhrase.save();

  res.send({status: 'OK'})
};

const getPhrase = async (req, res, next) => {
  const phrases = await Phrase.find().exec(); // TODO: exec return a real promise
  res.json(words);
}

exports.createPhrases = createPhrases;
exports.getPhrase = getPhrase;