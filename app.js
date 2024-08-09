const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/todo_express", {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(3000, () => console.log("port running succesfully"));
