const mongoose = require("mongoose")
const xlsx = require('xlsx')

const Parser = require("../utils/parsers")
const Phrase = require("../models/phrase")

const createPhrases = async (req, res, next) => {
  
  let workbook = xlsx.read(req.body.text, {type: 'binary'})
  
  let phrasesList = Parser.xlsx2map(workbook.Sheets.List1)
  console.log(phrasesList)

  phrasesList.forEach(async (elem) => {
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

const getPhrase = async (req, res, next) => {
  const phrases = await Phrase.find().exec() // TODO: exec return a real promise
  res.json(words)
}

exports.createPhrases = createPhrases
exports.getPhrase = getPhrase