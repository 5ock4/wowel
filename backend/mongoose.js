const mongoose = require("mongoose");

const Word = require("./models/words");

// Mongoose uses connection pooling, to not do it manually with mongodb library
mongoose
  .connect(
    "mongodb+srv://5ock4:banicekova@cluster0.fcgxv.mongodb.net/words-db?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database!")) // This is propmise? 
  .catch(() => console.log("Connection failed!")); // TODO: is it the same as the second argument for then?

const createWord = async (req, res, next) => {
  const createdWord = new Word({
    word: req.body.word,
    type: req.body.type
  });
  console.log(createdWord);
  const result = await createdWord.save();
  console.log(typeof createWord._id); // Using mongoose virtual getter - getting ObjectID as a string
                                      // - otherwise its a special datatype of MongoDB
  res.json(result);
};

const getWords = async (req, res, next) => {
  const words = await Word.find().exec(); // TODO: exec return a real propise - what does it mean?
  res.json(words);
}

exports.createWord = createWord;
exports.getWord = getWords;