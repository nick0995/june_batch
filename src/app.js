const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Weclome to my application!");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/help", (req, res) => {
  res.send("help");
});

app.listen(3000, () => {
  console.log("Server is running on the port 3000!");
});
