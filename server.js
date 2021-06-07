const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "https://vote2021kadi.netlify.app",
};
/* app.use(cors()); */
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

const voteRouter = require("./voteRouter");

app.use("/api/v1/vote", cors(corsOptions), voteRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
