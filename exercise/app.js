const express = require("express");

require("dotenv/config");

const app = express();

app.use(express.static("public"));

app.all("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.all("/hobbies", (request, response) => {
  response.sendFile(__dirname + "/views/hobbies.html");
});

app.all("/crochet", (request, response) => {
  response.sendFile(__dirname + "/views/crochet.html");
});

app.listen(3000, () => {
  console.log("hola, no sé que estoy haciendo");
});
