const router = require("express").Router();
const Vote = require("./voteModel.model");
require("dotenv").config();

router.get("/test", async (req, res) => {
  res.json({ msg: "test" });
});

router.post("/add", async (req, res) => {
  const { vote, email } = req.body;
  const newVote = new Vote({ vote, email });

  if (email.endsWith(process.env.ENDING)) {
    try {
      const saveVote = await newVote.save();
      res.json(saveVote);
    } catch (e) {
      res.send(`Error: ${e}`);
    }
  }
  else res.status(400); // bad request
});

module.exports = router;
