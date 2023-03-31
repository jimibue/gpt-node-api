const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/chat", require("./src/routes/chat.routes.js"));
app.use("/chat", require("./src/routes/socialize.routes.js"));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to gpt-node-api" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});