const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://5ock4:banicekova@cluster0.fcgxv.mongodb.net/words-db?retryWrites=true&w=majority'

const createWord = async (req, res, next) => {
  console.log('Creating word')
  console.log(req.body)

  const newWord = {
    word: req.body.word,
    type: req.body.type
  };
  const client = new MongoClient(url);
  
  // Initiating connection below:
  try {
    await client.connect();
    const db = client.db(); // mongo will take the db name from the URL ("words-db")
    const result = db.collection('words').insertOne(newWord); // if the collection is existing, the document will be added to existing col. otherwise a new col. is created
  } catch (error) {
    return res.json({message: 'Could not store data'})
  };
  client.close();

  res.json(newWord);
};

const getWord = async (req, res, next) => {
  const client = new MongoClient(url);
  let words;

  try {
    await client.connect();
    const db = client.db();
    words = await db.collection('words').find().toArray();
    console.log(words);
  } catch (error) {
    console.log(error.message)
    return res.json({message: `${error} ${error.message}`})
  };
  client.close();

  res.json(words)
};

exports.createWord = createWord;
exports.getWord = getWord;