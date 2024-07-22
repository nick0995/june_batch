const express = require("express");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname,"../public");

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req,res)=>{
    res.send({
      forecast: 'It is snowing!',
      location: "Shimla"
    });
});

app.listen(3000, () => {
  console.log("Server is running on the port 3000!");
});
