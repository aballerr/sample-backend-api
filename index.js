const express = require("express");

const app = express();

const PORT = 5001;
//yo retry restart
//a
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// random change wee ssssaaaa
app.get("/ping", (req, res) => {
  res.send("Pong");
});
