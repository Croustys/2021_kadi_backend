const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully.");
});

const bookRouter = require("./routes/book");
//const voteRouter = require('');

//app.use('/api/v1/votes', voteRouter);
app.use("/api/v1/test", (req, res) => {
  res.json({ message: "test successfull" });
});

if (process.env.NODE_ENV === "production") {
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
