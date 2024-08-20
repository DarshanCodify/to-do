// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// // mongoose.connect("mongodb://localhost:27017/todo_express", {
// //   useNewUrlParser: true,
// //   UseUnifiedTopology: true,
// // });
// mongoose.connect('mongodb://localhost:27017/todo_express');


// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.set("view engine", "ejs");

// app.use(require("./routes/index"));
// app.use(require("./routes/todo"));

// app.listen(5000, () => console.log("port running succesfully"));

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB using the updated connection string format
mongoose.connect("mongodb://localhost:27017/todo_express");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(5000, () => console.log("Server running successfully on port 5000"));
