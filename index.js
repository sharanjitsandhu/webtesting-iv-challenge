const express = require("express"); // import the express package

const server = express(); //creates the server

// handle requests to the root of the api, the / route
server.get("/", (req, res) => {
  res.send("Server Testing..."); // producing a response and sending back to the client
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

// watch for connections on port 8000
server.listen(8000, () => {
  console.log("http://localhost:8000");
});
