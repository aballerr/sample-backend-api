const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// random change wee ssssaa
app.get("/ping", (req, res) => {
  res.send("Pong");
});
