const { Router } = require("express");
const User = require("../models/User");
const Bars = require("../models/Bars");
const router = Router();

/*
all bars list logic will be here
*/

router.post("/userbars", async (req, res) => {
  const data = { _id: req.body.userId };
  const userBarsData = [];
  try {
    const userBars = await User.find(data);
    for (let item of userBars[0].barsList) {
      const barId = { _id: item };
      const bar = await Bars.find(barId);
      userBarsData.push(bar[0]);
      //userBarsData = [...userBarsData, bar]
    }
    res.json(userBarsData);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
