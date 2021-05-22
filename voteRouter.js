const router = require("express").Router();
const Vote = require("./voteModel.model");

router.post("/add/:vote/:email", async (req, res) => {
  const { vote, email } = req.params;
  const newVote = new Vote({ vote, email });

  try {
    const saveVote = await newVote.save();
    res.json(saveVote);
  } catch (e) {
    res.send(`Error: ${e}`);
  }
});

module.exports = router;
