const { Router } = require("express");
const User = require("../models/User");
const Bars = require("../models/Bars")
const router = Router();

/*
all bars list logic will be here
*/

router.post("/userbars", async (req, res) => {
  const data = { _id: req.body.userId };
  const userBarsData = []
  try {
    const userBars = await User.find(data);
    //console.log(userBars[0].barsList);
    for (let item of userBars[0].barsList) {
      const barId = { _id: item }
      //const barId = { _id: `${item}`}
      const bar = await Bars.find(barId);
      //console.log(bar[0])
      userBarsData.push(bar[0])
      //userBarsData = [...userBarsData, bar]
    }
    console.log(userBarsData)
    res.json(userBars);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
