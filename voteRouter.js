const router = require("express").Router();
const Vote = require("./voteModel.model");

router.get("/test", async (req, res) => {
  res.json({ msg: "yes" });
});

router.post("/add", async (req, res) => {
  const { vote, email } = req.body;
  const newVote = new Vote({ vote, email });

  // @todo implement backend email check.
  try {
    const saveVote = await newVote.save();
    res.json(saveVote);
  } catch (e) {
    res.send(`Error: ${e}`);
  }
});

module.exports = router;
