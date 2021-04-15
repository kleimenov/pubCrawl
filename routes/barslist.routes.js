const { Router } = require("express");
const User = require("../models/User");
const router = Router();

/*
all bars list logic will be here
*/

router.post("/userbars", async (req, res) => {
  const data = { _id: req.body.userId };
  const userBarsData = []
  try {
    const userBars = await User.find(data);
    console.log(userBars[0].barsList);
    res.json(userBars);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
