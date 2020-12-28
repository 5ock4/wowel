const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dictRoutes = require("./routes/users-routes");
const fileRoutes = require("./routes/phrases-routes");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use(dictRoutes);
app.use(fileRoutes);

// Mongoose uses connection pooling, to not do it manually with mongodb library
mongoose
  .connect(
    "mongodb+srv://5ock4:banicekova@cluster0.fcgxv.mongodb.net/words-db?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`);
    });
  }) 
  .catch(err => {
    console.log(err);
  });