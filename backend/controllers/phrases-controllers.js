const mongoose = require("mongoose");

const Phrase = require("../models/phrase");

const createPhrase = async (phrase) => {
  const createdPhrase = new Phrase({
    phrase: phrase,
    type: 'tst'
  });
  console.log(createdPhrase);
  const result = await createdPhrase.save();
};

const getPhrase = async (req, res, next) => {
  const phrases = await Phrase.find().exec(); // TODO: exec return a real promise
  res.json(words);
}

exports.createPhrase = createPhrase;
exports.getPhrase = getPhrase;