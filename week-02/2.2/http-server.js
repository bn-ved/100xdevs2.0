const express = require("express");
const port = 3000;
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("2 + 2 is 4 \n");
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});

/**
 * Assignments
 * Create a todo app that lets users store todos on the server
 * Create a http server from scratch in C
 * Create a http server in rust
 * Create a http server in golang
 * Create a http server in java
 */
