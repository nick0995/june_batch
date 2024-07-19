const express = require("express");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname,"../public");

console.log(path.join(__dirname,"../public"));
app.use(express.static(publicDirectoryPath));

app.get("/about", (req, res) => {
  res.send("<h1>about<h1>");
});

app.get("/help", (req, res) => {
  res.send("help");
});

app.get("weather", (req,res)=>{
    res.send("weather");
});

app.listen(3000, () => {
  console.log("Server is running on the port 3000!");
});
