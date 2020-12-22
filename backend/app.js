const express = require("express");
const dictRoutes = require("./routes/dict-routes");
const fileRoutes = require("./routes/file-routes");

const app = express();
const port = 5000;

app.use(dictRoutes);
app.use(fileRoutes);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
