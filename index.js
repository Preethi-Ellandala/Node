const express = require("express");
const app = express();
const cors = require(cors);
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello World!");
});
app.listen(3000);
