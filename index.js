const express = require("express");

const server = express();

// request handle function
// producing a response and sending back to the client
server.get("/", (req, res) => {
  res.send("Server Testing...");
});

// endpoints
server.get("/animals", (req, res) => {
  const animals = [
    {
      id: 1,
      name: "Bison"
    },
    {
      id: 2,
      name: "Black Bear"
    }
  ];
  res.status(200).json(animals); // returning json data and correct http status code
});

server.listen(8000, () => {
  console.log("http://localhost:8000");
});
