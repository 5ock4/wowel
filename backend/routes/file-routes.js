const express = require('express');
const fs = require("fs");
const busboy = require("connect-busboy");
const bodyParser = require('body-parser');
const db = require('../mongoose');

const router = express.Router();

// router.use(busboy);
router.use(bodyParser.json());

router.get("/api", (req, res, next) => {
  res.send({ express : 'api'});
});

router.post("/api", (req, res) => {
  let fstream;
  req.pipe(req.busboy);
  req.busboy.on("file", (fieldname, file, filename) => {
    console.log("Uploading: " + filename);
    fstream = fs.createWriteStream(__dirname + "/files/" + filename);
    file.pipe(fstream);
    fstream.on("close", () => {
      res.redirect("back");
    });
  });
});

module.exports = router;