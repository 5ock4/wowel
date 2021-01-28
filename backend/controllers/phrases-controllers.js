const mongoose = require("mongoose")
const xlsx = require('xlsx')

const Parser = require("../utils/parsers")
const Phrase = require("../models/phrase")

const createPhrases = async (req, res, next) => {
  
  let workbook = xlsx.read(req.body.text, {type: 'binary'})
  
  let phrasesList = Parser.xlsx2map(workbook.Sheets.List1) // TODO: Select sheets more generally
  console.log(phrasesList)

  phrasesList.forEach(async (elem) => { // TODO: handle better the 
    const createdPhrase = new Phrase({
      _id: elem[0],
      phrase: elem[0],
      translation: elem[1],
      type: 'word'
    })
    console.log(createdPhrase)
    
    const result = await createdPhrase.save()
  })

  res.send({status: 'OK'})
}

const getPhrases = async (req, res, next) => {
  let phrases
  try {
    phrases = await Phrase.find().exec()
  } catch (err) {
    const error = new HttpError(
      'Fetching phrases failed, please try again later.',
      500
    )
    return next(error)
  }
  // TODO: check once again the process of creating this JSON
  res.json({ phrases: phrases.map(phrase => phrase.toObject({ getters: true})) })
}

exports.createPhrases = createPhrases
exports.getPhrases = getPhrases