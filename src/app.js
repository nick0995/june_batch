const express = require("express");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname,"../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather app",
    author: "Neeraj Chauhan",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    author: "Neeraj Chauhan",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Help",
    author: "Neeraj Chauhan",
  });
});
app.get("/weather", (req,res)=>{
    res.send({
      forecast: 'It is snowing!',
      location: "Shimla"
    });
});

app.listen(3000, () => {
  console.log("Server is running on the port 3000!");
});
