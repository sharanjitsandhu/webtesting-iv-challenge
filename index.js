const express = require("express");

const server = express();

// request handle function
// producing a response and sending back to the client
server.get("/", (req, res) => {
  res.send("Server Testing...");
});

server.listen(8000, () => {
  console.log("http://localhost:8000");
});
