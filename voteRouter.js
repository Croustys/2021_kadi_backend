const router = require("express").Router();
const Vote = require("./voteModel.model");
require("dotenv").config();

const CONTESTANTS = [
  "Boglári",
  "Gordon",
  "Zsófi",
  "Ádi",
  "Félix",
  "Denisz",
  "Virsi",
];

router.get("/test", async (req, res) => {
  res.json({ msg: "test" });
});

router.post("/add", async (req, res) => {
  const { vote, email } = req.body;
  const newVote = new Vote({ vote, email });

  const emailArray = await Vote.find({ email });
  const notExists = Array.isArray(emailArray) && emailArray.length === 0;
  const validEmail = notExists && email.endsWith(process.env.ENDING);

  const validVote = CONTESTANTS.includes(vote);

  if (validEmail && validVote) {
    try {
      const saveVote = await newVote.save();
      res.json(saveVote);
    } catch (e) {
      res.send(`Error: ${e}`);
    }
  } else res.sendStatus(400); // bad request
});

module.exports = router;
