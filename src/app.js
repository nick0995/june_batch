const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const publicDirectoryPath = path.join(__dirname, "../public");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather app",
    name: "Neeraj Chauhan",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Neeraj Chauhan",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Neeraj Chauhan",
  });
});

app.get("/weather", (req,res)=>{
    res.send({
      forecast: 'It is snowing!',
      location: "Shimla"
    });
});

app.get("*", (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Neeraj Chauhan',
    errorMessage: 'Page not found!'
  })
});

app.listen(3000, () => {
  console.log("Server is running on the port 3000!");
});
